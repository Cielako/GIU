// b) HTML version
let http = require('http');
let fs = require('fs');
let socket = require('socket.io');
let html = fs.readFileSync("index.html");
let rozmowa = ["Witaj"];

//create a server object
let server = http.createServer(function (req, res) { // function to handle request
    res.write(html)
    res.end(); //end the response
})

let io = socket(server);
let id = 0; // id dla nowego użytkownika
let players = {}; // Lista użytkowników
let winnerr;

io.on('connection', function (socket) {
    // powstaje nowy socket z którym będziemy gadać z kolejnym klientem

    // id dla poszczególnych użytkowników
    if (players[0] == undefined || players[1] == undefined) {
        socket.id = id;
        // wysyłamy wartość nadanego id
        socket.emit("id", socket.id)
        // Przy podłączeniu 
        socket.on("nickname", function (nickname) {
            socket.nickname = nickname;
            players[id] = nickname;
            let user = String(`<li> <b>${players[socket.id]}</b> grasz jako gracz: ${socket.id + 1} </li>`);
            io.emit('chat message', `Gracz o nazwie ${players[socket.id]} wszedł do lobby`); // do wszystkich

            //zwiększenie id o 1, przy każdym nowym użytkowniku
            id++;

            io.emit("users", user);
        });
    }

    if (!players[socket])
        if (players[0] == undefined)
            players[0] = socket;
        else if (players[1] == undefined)
            players[1] = socket;
        else
            socket.emit('chat message', `Niestety. Aktualnie trwa rozgrywka, pomiędzy graczem:<b>${players[0]}</b> oraz graczem:<b>${players[1]}</b> `)

    //Przy rozłączeniu
    socket.on("disconnect", function () {
        if (players[socket.id] != undefined) {
            io.emit('chat message', `Gracz o nazwie ${players[socket.id]} wyszedł z lobby`); // do wszystkich
        }
        delete players[socket.id];
        let user = "";
        if (players[0] == undefined)
            id = 0;
        else if (players[1] == undefined)
            id = 1;
        else if (players[0] == undefined && players[1] == undefined)
            id = 0;
        io.emit("users", user);
    });

    // wysyłamy dotychczasowy przebieg rozmowy
    for (let msg of rozmowa)
        socket.emit('chat message', msg);

    // ustawiamy sposób reakcji na otrzymywane wiadomości
    socket.on('chat message', function (msg) {
        rozmowa.push(msg)
        io.emit('chat message', msg); // do wszystkich
    });

    socket.on('reset', function (msg) {
        rozmowa = [msg]
        io.emit('reset', msg); // do wszystkich
    });

    socket.on('winner', function (msg) {
        // winner[msg] = true;
        // console.log(winner[msg]);
        winnerr = msg;
        console.log(winnerr + "dsasd")
        if (winnerr == 0)
            io.emit("stopGame", 0);
        if (winnerr == 1)
            io.emit("stopGame", 1);
        io.emit('reset', `Gracz o nazwie ${players[msg]} wygrał rozgrywke`); // do wszystkich
    });
    //winner = undefined;
    // socket.on('restartGame', function (rg) {

    // });

});



server.listen(8081);
