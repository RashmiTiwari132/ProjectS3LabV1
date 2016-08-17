var exec = require('child_process').exec;

var dockerCommitFileName = "DockerCommit.js";

var commitCommand;

var InitiallizeCommit = function(Ouserid){
	var CommitCommand1 = "sudo docker commit ";
	var ContainerInstance = "container_instance";
	
	commitCommand = CommitCommand1+ContainerInstance+Ouserid;
	console.log(commitCommand);
}

var InitiallizeAll = function(Ouserid){
	InitiallizeCommit(Ouserid);
}

var RunCommitCommand = function(OUserid){
	exec(commitCommand, (error, stdout, stderr)=>{
		if(error != null){
			console.error('error '+stderr);
			return;
		}else{
			console.log('success');
			console.log(stdout);
		}
	});
}

var commit = function(OUserid){
	InitiallizeAll(OUserid);
	RunCommitCommand(OUserid);
}
	

var commit_container = function(Ouserid){
	commit(Ouserid);
}("11");

module.exports.commit_container = commit_container;
