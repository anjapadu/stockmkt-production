import express from 'express'
import io from 'socket.io';
import { Server } from 'http';

const app = express()
const server = Server(app);

const socket = io(server, { origins: '*:*' })

server.listen(process.env.SOCKET_PORT, () => {
  console.log('SOCKEET WORKING ON 5020')
});

export {
  socket as io
};