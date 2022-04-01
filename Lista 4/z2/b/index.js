// a) JSON version
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
let usersList = {}; // Lista użytkowników

io.on('connection', function (socket) {
    // powstaje nowy socket z którym będziemy gadać z kolejnym klientem

    // id dla poszczególnych użytkowników
    socket.id = ++id;
    
    // Przy podłączeniu 
    socket.on("nickname", function (nickname) {
        socket.nickname = nickname;
        usersList[id] = nickname;

        let tempList = "";
        for (let u in usersList)
            tempList += String(`<li> ${usersList[u]} | id:${u} </li>`);
        io.emit("users", tempList);
    });

    //Przy rozłączeniu
    socket.on("disconnect", function () {
        delete usersList[socket.id];
        let tempList = "";
        for (let u in usersList)
            tempList += String(`<li> ${usersList[u]} | id:${u} </li>`);
        io.emit("users", tempList);
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

});



server.listen(8081);
