const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const portText = process.env.PORT || 3001;
const portMap = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(portText, () => {
  console.log(`Socket.IO server running at http://localhost:${portText}/`);
});
