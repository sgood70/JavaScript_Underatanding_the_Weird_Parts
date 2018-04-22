/**
 * 28. Default Values
 */

function greet(name){
    console.log(name);
    
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet();
greet(0);
greet('Jason');