var exec = require('child_process').exec;

var docker3FileName = "docker3.js";

//var Odocker3 = require('./'+docker3FileName);

var stopCommand;



var InitiallizeStop = function(Ouserid){
	//sudo docker build -t my_application_img .
	var StopCommand1 = "sudo docker stop ";
	var ContainerInstance = "container_instance";
	
	stopCommand = StopCommand1+ContainerInstance+Ouserid;
	console.log(stopCommand);
}

var InitiallizeAll = function(Ouserid){
	InitiallizeStop(Ouserid);
}

var RunStopCommand = function(OUserid){
	exec(stopCommand, (error, stdout, stderr)=>{
		if(error != null){
			console.error('error '+stderr);
			return;
		}else{
			console.log('success');
			console.log(stdout);
			//Odocker3.start_docker3(OUserid);
		}
	});
}

var stop = function(OUserid){
	InitiallizeAll(OUserid);
	RunStopCommand(OUserid);
}
	

var stop_docker = function(Ouserid){
	stop(Ouserid);
}("11");

module.exports.stop_docker = stop_docker;
