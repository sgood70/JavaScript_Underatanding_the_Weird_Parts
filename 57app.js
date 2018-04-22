/**
 * 57. Building Objects
 * Function Constructors, 'new'
 *   and A normal function that is used to construct objects
 */

function Person(){
	console.log(this);
	this.firstname = 'John';
	this.lastname = 'Doe';
	console.log('This function is invoked.')
	
//	return {greeting: 'I got in the way'};
//	return (function(){console.log('son')});
}

var john = new Person();
//var john = Person();
console.log(john);

function Person1(firstname, lastname){
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked.')
	
//	return {greeting: 'I got in the way'};
}

var son = new Person1('nolbu', 'son');
console.log(son);

var jane = new Person1('Jane', 'Doe');
console.log(jane);
