/**
 * 40.Framework Aside: Function Overloading
 * Overlaoding is Same Function Name, different parameters
 * Javascript doesn't support Function Overloading.
 * So we have to find solution.
 */

function greet(firstname, lastname, language){
	language = language || 'en';
	
	if(language === 'en'){
		console.log('Hello ' + firstname + ' '+lastname);
	}
	
	if(language === 'es'){
		console.log('Hola ' + firstname + ' '+lastname);
	}
}

function greetEnglish(firstname, lastname){
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname){
	greet(firstname, lastname, 'es');
}

greet('John','Doe','en');
greet('John','Doe','es');

greetEnglish('John','Doe');
greetSpanish('John','Doe');
