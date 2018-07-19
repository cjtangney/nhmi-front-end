import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log('Server started \n');
  console.log('\x1b[36m%s\x1b[0m', '... listening on localhost:3000');
});

if (module.hot) {
  console.log('Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
