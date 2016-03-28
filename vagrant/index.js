var http = require ('http');

http.createServer(handleRequest)
  .listen(4567, function() {
    console.log(`Now listening on port ${PORT}.`);
  });


function handleRequest(request, response) {
  console.log(`A ${request.method} request came in!`);
  response.end(`Hello! Thanks for your ${request.method} request!`);
}
