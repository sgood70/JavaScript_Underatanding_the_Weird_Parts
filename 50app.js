/**
 * 50. Call(), Apply(), and Bind()
 */

var person = {
		firstname: 'John',
		lastname:	'Doe',
		getFullName: function(){
			var fullname = this.firstname + ' ' + this.lastname;
			return fullname;
		}
}

var logName = function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-------------------------------');
}
//}.bind(person); 이것도 가능하다.

var logPersonName = logName.bind(person);
logPersonName('en');


logName.call(person, 'en', 'es');
logName.apply(person, ['kr', 'JP']);

//function borrowing
var person2 = {
		firstname: 'Jane',
		lastname:	'Doe'
}

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a,b){
	return a*b;
}
var multipleByTwo = multiply.bind(this,2);
console.log(multipleByTwo(4));
var multipleByThree = multiply.bind(this,3);
console.log(multipleByThree(4));

