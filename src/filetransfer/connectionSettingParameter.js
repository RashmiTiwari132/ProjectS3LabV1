const PORT = '1337';
const HOST = '127.0.0.1';

var getPort = function(){
	return PORT;
}

var getHost = function(){
	return HOST;
}

exports.getPort = getPort;
exports.getHost = getHost;