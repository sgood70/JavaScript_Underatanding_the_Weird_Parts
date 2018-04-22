/**
 * 47. Closures Sample and Solution 
 *   buildfunction : Same Result
 *   buildfunction1 : ESS
 *   buildfunction2 : Traditional Solution
 */

function buildFunction(){
	var arr = [];
	for(var i=0; i<3 ; i++){
		arr.push(
				function(){
					console.log(i);
				}
		)
	}
	return arr;
}
var fs = buildFunction();
fs[0](); fs[1](); fs[2]();


// ESS
console.log('ESS-----------------------------------');
function buildFunction1(){
	var arr = [];
	for(var i=0; i<3 ; i++){
		let j = i;
		arr.push(
				function(){
					console.log(j);
				}
		)
	}
	return arr;
}

var fs1 = buildFunction1();
fs1[0](); fs1[1](); fs1[2]();

//Traditional
console.log('Traditional-----------------------------------');
function buildFunction2(){
	var arr = [];
	for(var i=0; i<3 ; i++){
		arr.push(
				(function(j){
					return function(){
						console.log(j);
					}
				}(i))
		)
	}
	return arr;
}

var fs2 = buildFunction2();
fs2[0](); fs2[1](); fs2[2]();
