/**
 * 17.Asynchronous Callbacks
 */

//Long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}

function clickHandler(){
    console.log('click event!');
}

// listen from the click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');