var http = require('http');
var fs = require('fs');
var socket = require('socket.io');
var html = fs.readFileSync("index.html");


var server=http.createServer(function(req,res){
res.write(html);
res.end();
});

var io = socket(server);

var gracze = {};
var pozycjeOgonow = [];
var i = 1;

var pX = 665 - (Math.floor(Math.random()*19)) * 35;
var pY = 665 - (Math.floor(Math.random()*19)) * 35;
var punkty = [pX, pY];
var czas;
var czas2;
var kolor = [];
var wyczysc = false;

io.on("connection", function(socket){

    // ! po zakomentowaniu clearintervala starzy gracze widzą tych nowych, ale przyspiesza wszystko i wywala serwer przy ok. czwartym graczu
    clearInterval(czas, 100);
    
    socket.id=++i;
    kolor[i] = [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)];
    gracze[i] = [350, 350, 35, 0, true];
    pozycjeOgonow[i] = [ [350, 350] ];

    function gra2() { socket.emit("ruch", gracze, socket.id, kolor, pozycjeOgonow); }

    function gra()
    {

        socket.emit("punktyS", punkty);                     // wysyla do klienta pozycje punktu do zdobycia

        for(let gracz in gracze)            
        {
            gracze[gracz][0] += gracze[gracz][2];   // ruch X
            gracze[gracz][1] += gracze[gracz][3];   // ruch Y
            pozycjeOgonow[gracz] = [ ...pozycjeOgonow[gracz], [ gracze[gracz][0], gracze[gracz][1] ] ]; // tablica tablic współrzędnych na ktorych na byc rysowany waz
        }

        if(wyczysc == true){                // wysyla do klienta wiadomosc zeby wyczyscic ekran
            socket.emit("wyczysc");
            wyczysc = false;
        }
    }

    socket.on("ruch", function(ogony){
        pozycjeOgonow = ogony;
    });

    socket.on("punktyK", function(){              //zmiana wartosci punkty[2] na true zeby narysowac kolejny kwadrat z punktem do zdobycia
        punkty[0] = 665 - (Math.floor(Math.random()*19)) * 35;
        punkty[1] = 665 - (Math.floor(Math.random()*19)) * 35;
    });

    socket.on("zatrzymaj", function(gracz){         //zatrzymuje gracza jesli uderzyl w sciane
        gracze[gracz][2] = 0;
        gracze[gracz][3] = 0;
        gracze[gracz][4] = false;
    });

    socket.on("klik", function(przesuniecie, gracz){    //zmiana kierunku ruchu weza
        if(gracze[gracz][4] == true){
            gracze[gracz][2] = przesuniecie[0];
            gracze[gracz][3] = przesuniecie[1];
        }
    });

    czas = setInterval(gra, 150);
    czas2 = setInterval(gra2, 150);

    socket.on('reset', function(){
        for(let gracz in gracze){
            gracze[gracz] = [350, 350, 35, 0];
            punkty[2] = true;
            wyczysc = true;
            socket.emit("wyczysc");
        }
    });
});

// for(let socket in io.socket){
//     socket.emit("punktyS", punkty);                     // wysyla do klienta pozycje punktu do zdobycia

//     for(let gracz in gracze)            
//     {
//         gracze[gracz][0] += gracze[gracz][2];   // ruch X
//         gracze[gracz][1] += gracze[gracz][3];   // ruch Y
//         pozycjeOgonow[gracz] = [ ...pozycjeOgonow[gracz], [ gracze[gracz][0], gracze[gracz][1] ] ]; // tablica tablic współrzędnych na ktorych na byc rysowany waz
//     }

//     if(wyczysc == true){                // wysyla do klienta wiadomosc zeby wyczyscic ekran
//         socket.emit("wyczysc");
//         wyczysc = false;
//     }
// }


server.listen(8080);