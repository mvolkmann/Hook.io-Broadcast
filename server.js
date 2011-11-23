'use strict';
var Webserver = require('hook.io-webserver').Webserver;

// server is a Hook.
var server = new Webserver({
  name: 'web3-demo',
  port: 3000,
  webroot: './public'
});

server.on('hook::ready', function () {
  console.log('listening on port ' + server.port);
});

server.on('*::fromBrowser', function (data, cb) {
  console.log('server received ' + this.event +
    ' event with data ' + data);
  data = 'date on server is ' + new Date();
  server.emit('fromServer', data);
  cb(null, 'fromCallback');
});

server.listen();
