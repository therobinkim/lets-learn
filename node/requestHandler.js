'use strict';

module.exports = function requestHandler(request, response) {
  response.log = function() {
    for(var i = 0; i < arguments.length - 1; i++) {
      this.write(arguments[i] + ' ');
    }
    this.write(arguments[arguments.length - 1] + '\n');
  }

  var data = '';
  response.log('this is a', request.method, 'request');
  request.on('data', function requestOnData(chunk) {
    console.log('chunk length:', chunk.length, 'bytes, or', chunk.length/1024, 'KiB');
    data += chunk;
  });
  request.on('end', function requestOnEnd() {
    console.log('end');
    response.log('data:', data);
    response.log('request.url:', request.url);
    response.log('time:', new Date());
    setTimeout(function respondEnd() {
      response.log('one second later...');
      response.log('time:', new Date());
      response.end('goodbye world');
    }, 1000);
  });
};
