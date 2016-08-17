const net = require('net');
const fs = require('fs');
const dl = require('delivery');

const conectionSettingParameter = require('./connectionSettingParameter.js');

const TAG = 'backendDockerRemotePythonScriptReceiver';

const fileReceiver = net.createServer();
const PORT = conectionSettingParameter.getPort();
const HOST = conectionSettingParameter.getHost();

const startListeningForIncomingConnections = function(){
	fileReceiver.listen(PORT, HOST);
}

const receiveData = function(data){
	console.log(data.toString());
}

const closeConnection = function(){
	console.log("Connection has been closed");
}

const connectionEstablished = function(sock){
	console.log(sock.remoteAddress+':'+sock.remotePort);
	
	var delivery = dl.listen(socket);
	delivery.on('receive.success', function(file){
		var params = file.params;
		fs.writeFile(file.name, file.buffer, function(error){
			if(error){
				console.log("File could not be saved");
			}else{
				console.log("File has been saved successfully");
			}
		});
	});
	sock.on('close', closeConnection);
}

const startFileReceiver = function(){
	startListeningForIncomingConnections();
}();

fileReceiver.on('connection', connectionEstablished);


