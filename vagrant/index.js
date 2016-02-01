var http = require ('http');

http.createServer(requestHandler)
  .listen(4567);

function requestHandler(request, response) {
  console.log('wut?');
  response.end('hello!');
}
