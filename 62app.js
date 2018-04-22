/**
 * 62. Arrays and for .. in
 */
Array.prototype.myCustomFeature = "Cool!";


var arr = ['John', 'Jane', 'Jim'];

// It can include other value
for(var prop in arr){
	console.log(prop + ': ' + arr[prop]);
}

// recommend
for(var i=0 ; i < arr.length ; i++){
	console.log(i + ': ' + arr[i]);
}