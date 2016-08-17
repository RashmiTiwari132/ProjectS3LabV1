var fs = require('fs');

var file = './../jsonfiles/ContainersList.json';
var obj = {'41':'undefined'};

var readJSONFileSync = function(){

	var JSONString;

	var contents = fs.readFileSync(file, "utf8");
	
	if(contents){
		JSONString = JSON.parse(contents);
	}else{
		JSONString = null;
	}

	return JSONString;
}

var writeJSONFileSync = function(containerId, containerState){

	var JSONcontents = readJSONFileSync();

	if(JSONcontents == null){
		JSONcontents = [];
		JSONcontents.push({containerId: containerId, containerState : containerState});
	}else{
		JSONcontents.push({containerId: containerId, containerState : containerState});
	}

	JSONString = JSON.stringify(JSONcontents);

	try{
		fs.writeFileSync(file, JSONString);
	}catch(error){
		console.log("Error "+error);
	}

 	console.log("File has been successfully saved ");
	
}


module.exports.writeJSONFileSync = writeJSONFileSync;

