function ladderaction(name){this.name=name;};
ladderaction.prototype.name=null;
ladderaction.prototype.perform=function(context){
	console.log('Executing '+this.name+' action');

};
ladderaction.prototype.errorhandler=function(context){
	console.log('handling error for '+this.name+' action');
};


modeule.exports=ladderaction;