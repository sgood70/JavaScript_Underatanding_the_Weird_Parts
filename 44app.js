/**
 * 44.Immediately Invoked Function Expression
 */

function greet(name){
	console.log('Hello ' + name);
}

greet('Nolbu');

// using a function expression
var greetFunc = function(name){
	console.log('Hello Func ' + name);
};

greetFunc('Nolbu');

// using an Immediately Invoked Function Expression(IIFE)
var greeting = function(name){
	console.log('Hello IIFE ' + name);
}('Nolbu');

// Although function execute, there is no return value
console.log('Var: '+greeting);

// 이런 형태로도 호출 가능하다.
3;
"I'am a Jason";
var firstname = 'Jason';
(function(name){
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(firstname)); //괄호 밖에서 호출 할 수 있다.
