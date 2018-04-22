/**
 * 15. Function, Context, and Variable Environments
 */

function b(){
	console.log('Function b ----------------------');
	var myVar;
	console.log(myVar);
}

function a(){
	console.log('Function a ----------------------');
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);