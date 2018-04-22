/**
 * 33.JSON (JavaScript Object Notation)
 * 		and Object Literals
 */

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname":"Mary", "isAProgrammer":true}');
console.log(jsonValue);