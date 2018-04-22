/**
 * 34.Functions are Objects
 */
function greet(){
    console.log('hi');
}

greet.language = 'english';

console.log('-----------------------');
console.log(greet);
console.log('-----------------------');
console.log(greet.language);
console.log('-----------------------');
greet();