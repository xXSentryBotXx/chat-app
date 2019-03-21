import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToSocket(interval, cb) {
    //socket.on('timer', timestamp => cb(null, timestamp));
    socket.on('messagesSent', messages => cb(null, messages));
}

function newMessage(message) {
    socket.emit('newMessage', message);
}

export { subscribeToSocket, newMessage }