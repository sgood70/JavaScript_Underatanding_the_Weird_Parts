/**
 * 56.Reflection and Extend
 */

var person = {
		firstname:	'Default',
		lastname: 	'Default',
		getFullName:	function(){
			return this.firstname + ' ' + this.lastname;
		}
}

var john = {
		firstname: 	'John',
		lastname:	'Doe'
}


// don't do this EVER!! for demo purposes only!!
john.__proto__ = person;

for(var prop in john){  // Every Member in Object john
	if(john.hasOwnProperty(prop)){	//john에 있는 것만 가지고 온다. 그렇지 않으면 __proto__에 있는 모든 것을 가져온다.
		console.log(prop + ': ' + john[prop]);
	}
}

var jane = {
		address: '111 Main St.',
		getFormalFullName: function(){ return this.lastname + ', ' + this.firstname;}
}

var jim = {
		getFirstName: function(){ return firstname; }
}

//console.log(john);
_.extend(john, jane, jim);
console.log(john);
