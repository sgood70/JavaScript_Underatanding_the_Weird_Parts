/**
 * 39. Arguments and spread
 * Argument is in the memory
 */
function greet(firstname, lastname, language){
	language = language || 'en';
	
	if(arguments.lgenth === 0){
		console.log('Missing parameters!');
		console.log('-----------------------');
		return;
	}
	
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments); // All argument
	console.log(arguments[0]);
	console.log('------------------------');
}

greet();
greet('John');
greet('John','Doe');
greet('John','Doe','es');

