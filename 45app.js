/**
 * 45. Framework Aside IIFFES and Safe Code
 */

// IIFE
(function(name){
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}('Jason')); //IIFE

console.log(greeting);

//IIFE
(function(global, name){
	var greeting = 'Hello again';
	global.greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(window, 'Jason')); //IIFE

console.log(greeting);