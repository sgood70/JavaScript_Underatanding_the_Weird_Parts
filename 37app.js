/**
 * 37. Objects, Functions, and 'this'
 */
function a(){
	console.log(this);
}

var b = function(){
	console.log(this);
}

a();
b();
console.log(window.name);


var c = {
		name: 'The c object',
		log: function(){
			// var self = this; Solution
			this.name = 'Updated c object';
			console.log(this);

			var setname = function(newname){
				this.name = newname;
			}
			setname('Update again! the c Object');
			console.log(this);
		}
}

console.log(window.name);
c.log();
a();
