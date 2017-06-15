var Promise = require("bluebird");
function ladder(){};
ladder.prototype.context=null;
ladder.prototype.actions=[];
ladder.prototype.nextLadder=null;
ladder.prototype.execute=function()
{
	if(this.actions && this.actions.length>0)
	{
		var i=0;
		this.actions[i].perform().then(this.actions[++i].perform).catch(this.actions[--i].error);
	}
		
}


module.exports=ladder;