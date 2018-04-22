/**
 * 49. Closures and Callbacks
 */

function sayHiLater(){
	var greeting = 'Hi!';
	var c = 3000;
	
	setTimeout(function(){
		console.log(greeting);
	},c);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function(){
	
// });

function tellMeWhenDone(callback){
	var a = 4000;
	var b = 5000;
	
	//setTimeout(callback(), 4000); // 이거 안 먹는다.
	callback();
}

tellMeWhenDone(function(){
	console.log('I am done!');
});

tellMeWhenDone(function(){
	console.log('All done...');
});
