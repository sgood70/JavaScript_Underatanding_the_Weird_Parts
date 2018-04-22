/**
 * 31.Object and Object Literals
 */
var person = {};
console.log(person);

person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea";

var person = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New Your',
        state: 'NY'
    }
}

console.log(person);

function greet(guest){
    console.log('Hi '+guest.firstname);
}

greet(person);
greet({firstname: 'Mary', lastname: 'Doe'});
greet('Son');
greet(2);
// greet(); Error occurred

person.address2 = {street: '333 Second st'};
console.log(person);