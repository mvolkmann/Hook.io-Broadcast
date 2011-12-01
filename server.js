'use strict';
var Webserver = require('hook.io-webserver').Webserver;

// server is a Hook.
var server = new Webserver({
  name: 'web3-demo',
  port: 3000,
  webroot: './public'
});

server.on('hook::ready', function (e, cb) {
  console.log('connected ' + server.port);
});

server.on('*::fromBrowser', function (data) {
  console.log('server received ' + this.event +' event with data ' + data);
  data = 'date on server is ' + new Date();
  server.emit(new Date()+'::fromServer', arguments);
});

server.listen();
