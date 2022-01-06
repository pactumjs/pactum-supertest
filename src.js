const http = require('http');
const { request } = require('pactum');

function run(app) {
  let server;

  async function start() {
    if (typeof app === 'function') {
      server = http.createServer(app);
    } else {
      server = app.server ? app.server : app;
    }
    await server.listen();
    const url = 'http://localhost:' + server.address().port;
    request.setBaseUrl(url);
  }

  async function stop() {
    await server.close();
  }

  before(async () => {
    await start();
  });
  
  after(async () => {
    await stop();
  });
}

module.exports = run;
