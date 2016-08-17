var exec = require('child_process').exec;

var executeContainer = "ExecuteContainer.js";

var Odocker3 = require('./'+executeContainer);

var buildCommand;



var InitiallizeBuild = function(Ouserid){
	//sudo docker build -t my_application_img .
	var BuildCommand1 = "sudo docker build -t ";
	var ContainerImage = "container_img";
	
	buildCommand = BuildCommand1+ContainerImage+Ouserid+" ."
	console.log(buildCommand);
}

var InitiallizeAll = function(Ouserid){
	InitiallizeBuild(Ouserid);
}

var RunBuildCommand = function(OUserid){
	exec(buildCommand,function(error, stdout, stderr){
		if(error != null){
			console.error('error '+stderr);
			return;
		}else{
			console.log('success');
			//console.log(stdout);
			Odocker3.start_container(OUserid);
		}
	});
}

var start = function(OUserid){
	InitiallizeAll(OUserid);
	RunBuildCommand(OUserid);
}
	

var build_image = function(Ouserid){
	start(Ouserid);
}

module.exports.build_image = build_image;
