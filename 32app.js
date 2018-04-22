/**
 * 32.Framework Aside: Faking Namespaces
 */

var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

var english = {};
var spanish = {};

//Number 2
//english.greetings = {};

//Number 1
english ={
    greetings: {}
}

english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);