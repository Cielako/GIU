var http = require('http');
var fs = require('fs');
var socket = require('socket.io');
var html = fs.readFileSync("index.html");

var rozmowa=["Witaj"];

//create a server object
var server = http.createServer(function (req, res) { // function to handle request
  res.write(html)
  res.end(); //end the response
}) 

var io = socket(server);
var members = {};
var id = 0; // wartość id dla nastepnego usera

io.on('connection', function(socket) {
  // powstaje nowy socket z którym będziemy gadać z kolejnym klientem
  
  // nadanie id
  socket.id = id;
  id++; // wrasta, by sie nei powtorzylo

  // odebranie nicku dla identyfikatora
  socket.on('nick', function(nick){
    socket.nick = nick;
    members[socket.id] = nick;
    io.emit('user_list', JSON.stringify(members));
  })

  // rozlaczenie
  socket.on('disconnect', function(){
    delete members[socket.id];
    io.emit('user_list', JSON.stringify(members));
  })

  // wysylanie listy, mozna bez json.stringify, tez zadziala
  io.emit('user_list', JSON.stringify(members));

  // wysyłamy dotychczasowy przebieg rozmowy
  for(let msg of rozmowa)  
     socket.emit('chat message', msg); 

  // ustawiamy sposób reakcji na otrzymywane wiadomości
  socket.on('chat message', function(msg) {
      rozmowa.push(msg);
      io.emit('chat message', msg); // do wszystkich
  })
  
  socket.on('reset', function(msg) {
      rozmowa=[msg]
      io.emit('reset', msg); // do wszystkich
  })

});

server.listen(8080);
