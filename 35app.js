/**
 * 35.Function Statement and Function Expressions
 */
greet();

function greet() {
    console.log("hi");
}

var anonymousGreet = function(){
    console.log('Also hi');
}

anonymousGreet();
console.log(anonymousGreet);

function log(a){
    console.log(a);
}

log(3);
log("Jason");
log({greeting: "hi"});
log(function() { console.log("hi")});

call(function() { console.log("Really hi")});
function call(a){
    a();
}
