/**
 * 38.Conceptual Aside:Arrays - Collections of Anything
 * Array Element can be everything in Javascript
 */

var arr = [
	1,
	false,
	{
		name: 'Tony',
		address: '111 Main St.'
	},
	function(name){
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	"hello"
];

console.log(arr);
arr[3](arr[2].name);
