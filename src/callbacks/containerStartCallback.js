
exports.containerStartCallback = function(error, containerInstanceId, stdout){
		if(error){
			console.log("Error containerStartCallback "+containerInstanceId);
		}else{
			console.log("Success containerStartCallback "+stdout);
		}
};

