/**
 * 60. Built-In Function Constructors
 */

String.prototype.isLengthGreaterThan = function(limit){
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
	return this > 0;
}

console.log(new Number(3).isPositive());