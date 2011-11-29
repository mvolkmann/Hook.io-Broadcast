'use strict';
/*global require: false */

// TODO: Why is the next line needed?
// TODO: Why doesn't it get Hook from the script tag in index.html?
// TODO: How does it know what "require" is?
var Hook = require('/hook.js').Hook;

// Make a Hook with a unique name.
var hookName = 'H' + new Date().getTime();
var hook = new Hook(hookName);
hook.connect(); // a client

hook.on('ready', function () {
  console.log('client hook ready');
});

// For debugging
/*
hook.onAny(function (data) {
  console.log('onAny got ' + this.event + ' event with data ' + data);
});
*/

hook.on('*::fromServer', function (data) {
  console.log('client received ' + this.event +
    ' event with data ' + data);
});

window.onload = function () {
  var button = document.getElementById('send');
  button.onclick = function (event) {
    var data = 'date on client is ' + new Date();
    hook.emit('fromBrowser', data);
  };
};
