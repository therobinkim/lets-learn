'use strict';

module.exports = function requestHandler(request, response) {
  var data = '';
  response.write('this is a ' + request.method + ' request\n');
  request.on('data', function requestOnData(chunk) {
    console.log('chunk');
    data += chunk;
  });
  request.on('end', function requestOnEnd() {
    response.write('data: ' + data + '\n');
    response.write('request.url: ' + request.url + '\n');
    response.write('time: ' + new Date() + '\n');
    setTimeout(function respondEnd() {
      response.write('one second later...\n');
      response.write('time: ' + new Date() + '\n');
      response.end('goodbye world');
    }, 1000);
  });
};
