//libs npm

//express
const express = require('express');
const app = express();

//socketio
const http = require('http').Server(app);
const io = require('socket.io')(http);

const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');


/**** Project configuration ****/

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/front/'));
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front/html/index.html');
});

io.on('connection', (socket) => {
  console.log('user is connected');
  socket.on('message', (msg) =>{
    console.log('message' + msg);
    io.emit('new message', msg);
  });
  socket.on('new message', msg => {
    let item = document.creatElement("li");
    item.textContent = msg;
    messages.appendChild(item);
  })
  socket.on("disconnect", () => {
    console.log('user is disconnected');
  });
});

http.listen(4200, ()=> {
  console.log('Server on port 4200');
})
