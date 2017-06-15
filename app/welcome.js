var config=require('./config.js');

function welcome(){};
welcome.prototype.showWelcomeMessage=function(){
	
	console.log("*** Welcome to the "+config.appName+" ***");
	console.log("--- version :"+ config.version+" ---");
	console.log("--- author :"+ config.author+" ---");
	console.log("--- email :"+ config.email+" ---");
}

module.exports=new welcome();
