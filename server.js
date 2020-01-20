const debug = require('debug')('app:server');
const http = require('http');

const config = require('./config');
const app = require('./app');

const port = config.PORT;
const server = http.createServer(app);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  if (error.code === 'EADDRINUSE') {
    debug(`${port} port is already in use`);
    process.exit(1);
  }
}

function onListening() {
  debug(`Listening on ${port} port`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
