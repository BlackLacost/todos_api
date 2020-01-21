import * as Debug from 'debug';
import * as http from 'http';

import { app } from './app';
import { config } from './config';

const debug = Debug('app:server');

const port = config.PORT;
const server = http.createServer(app);

function onError(error: any) {
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

export { server };
