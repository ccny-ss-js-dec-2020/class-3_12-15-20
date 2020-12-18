/*

1. Using process.argv, write to a text file
2. Add to the text file all of the arguments after "node index.js"
	 i.e. "node index.js show me the money" should produce a text file that reads "show me the money"

*/

var fs = require('fs');
console.log(process.argv)
var arguments = process.argv.splice(2);
console.log(arguments);
console.log(arguments.join(" "))

fs.writeFile('./write_to.txt', arguments.join("+"), function(err){
	if(err) throw err;
	console.log('written to file')
})
