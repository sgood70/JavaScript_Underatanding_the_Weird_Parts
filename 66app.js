/**
 * 66. 'typeof', 'instanceof', and figuring out what something is
 * 
 */

var a = 3;
console.log(typeof a);

var b = 'Hello';
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);	//weird!
console.log(Object.prototype.toString.call(d)) // better!

function Person(name){
	this.name = name;
}

var e = new Person('Jane');
console.log(e);
console.log(typeof e);
console.log(e instanceof Person);

var f = function(){};
console.log(typeof f);

console.log(typeof undefined);
console.log(typeof null); // a bug since, like, forever...

