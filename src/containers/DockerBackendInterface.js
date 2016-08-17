var buildImage = "BuildImage.js";
var jsonFile = "./../jsonfiles/UpdateContainersList.js";

var Odocker2 = require('./'+buildImage);

var writeJSONState = require(jsonFile);


var userid ;


var start = function(pUserid){
	Odocker2.build_image(pUserid);
	writeJSONState.writeJSONFileSync(pUserid, "Starting");
}

var start_callback = function(error, containerInstance){
	if(error){
		console.log("Error "+ error);
	}else{
		console.log("Container "+containerInstance+" finished execution");
	}
}


var start_docker1 = function(userid){
	//start("20");
	//start("21");
	//start("15");
	//start("16");
	start(userid);
}

module.exports.start_docker1 = start_docker1;


