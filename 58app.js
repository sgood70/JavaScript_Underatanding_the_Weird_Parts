/**
 * 58. Function Constructors and '.prototype'
 */

function Person(firstname, lastname){
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked.')
}

Person.prototype.getFullName = function(){
	console.log( this.firstname + ' ' + this.lastname);
}

console.log('--------------------------------');
var son = new Person('nolbu', 'son');
console.log(son);
son.getFullName();

console.log('--------------------------------');
var jane = new Person('Jane', 'Doe');
console.log(jane);
jane.getFullName();

Person.prototype.getFormalFullName = function(){
	console.log( this.lastname + ' ' + this.firstname);
}