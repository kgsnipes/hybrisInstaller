var Promise = require("bluebird");
function ladder(name,context,actions){
	this.context=context;
	this.actions=actions;
	this.name=name;
};
ladder.prototype.context=null;
ladder.prototype.actions=[];
ladder.prototype.nextLadder=null;
ladder.prototype.name=null;
ladder.prototype.setNextLaddder=function (ladder) {
	this.nextLadder=ladder;
}
ladder.prototype.execute=function()
{
	self=this.context;

	if(this.actions && this.actions.length>0)
	{
		var i=0;
		this.actions[i].perform(this.context).then(function(){this.actions[++i].perform(self.context)}).catch(this.actions[--i].errorhandler(self.context));
	}
	if(this.nextLadder)
	{	
		return this.nextLadder.execute();
	}
	else
	{
		return "Done with "+this.name;
	}

	
		
}


module.exports=ladder;