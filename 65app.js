/**
 * 65. Initialization
 */

var people = [
	{
		//the 'john' object
		firstname:	'John',
		lastname:	'Doe',
		address:	[
			'111 Main St.',
			'222 Third St.'
		]
	},
	{
		//the 'jane' object
		firstname:	'Jane',
		lastname:	'Doe',
		address:	[
			'333 Main St.',
			'444 Fifth St.'
		],
		greet: function(){
			return 'Hello!';
		}
	}
];

console.log(people);