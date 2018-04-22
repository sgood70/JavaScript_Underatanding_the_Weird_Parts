/**
 * 10.creation and hoisting
 */
b();
console.log("call console a");
console.log(a);
console.log("finish console a");

var a = 'Hello World';

function b(){
	console.log('Called b!!');
}
