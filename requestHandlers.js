var exec = require("child_process").exec;

function start (response) {
	console.log("About to handle a request for 'start'");

	exec("find /", {timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderr) {
		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.write(stdout);
		response.end();
	});
}

function upload (response) {
	console.log("About to handle a request for 'upload'");
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write("Thank you for uploading");
	response.end();
}

exports.start = start;
exports.upload = upload;
