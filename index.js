var exec = require('child_process').exec;
var welcome= require('./app/welcome.js');
var spinner= require('./app/spinner.js');


function main()
{
	welcome.showWelcomeMessage();

	spinner.start();
	spinner.stop();
	
}


main();