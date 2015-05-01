var http = require("http");
var url = require("url");

function start (portProvided, route) {
	// request handler
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('request for ' + pathname + ' recieved.');

		route(pathname);

		response.writeHead(200, {'Content-Type':'text/plain'});
		response.write("Hello World!");
		response.end();
	}

	// start the server with the callback
	var port = portProvided || 8888;
	http.createServer(onRequest).listen(port);

	console.log("** Server Started on port " + port + " **");
}



exports.start = start;