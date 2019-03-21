const io = require('socket.io')();

const messages = [
    'hello'
];

io.on('connection', (client) => {
  client.on('subscribeToSocket', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('getMessages', () => {
      client.emmit('messagesSent', messages);
  });

  client.on('newMessage', message => {
      console.log('new message!', message);
      messages.push(message);
      client.emit('messagesSent', messages);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);