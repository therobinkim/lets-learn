module.exports = function requestHandler(request, response) {
  var data = '';
  request.on('data', function requestOnData(chunk) {
    console.log('chunk');
    data += chunk;
  });
  request.on('end', function requestOnEnd() {
    response.write('data: ' + data + '\n');
    response.write('request.url: ' + request.url + '\n');
    setTimeout(function respondEnd() {
      response.end('1 second later: goodbye world');
    }, 1000);
  });
};
