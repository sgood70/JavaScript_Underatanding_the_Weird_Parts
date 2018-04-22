/**
 * 42. Automatic Semicolon Insertion
 * 
 */
function getPerson(){
	
	return    // Result : undefined, because of Automatic Semicolon Insertion
	{
		firstname: 'Tony'
	}
/*	
	return {
		firstname: 'Tony'
	}
*/
}

console.log(getPerson());

