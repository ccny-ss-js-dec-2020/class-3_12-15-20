//fs and require are built into Node.js
//'fs' is a file system module
//'require' is used to import modules
//here, we are importing the file system module into this file
var fs = require('fs');
// this is the contents that i am going to write to a file eventually
var whatImWritingToFile = "You're the voice try and understand it";

// this is using the 'fs' to write to a text file
// first parameter is the path and the file that you are writing
// second parameter is the content of the file you're writing to
// third parameter stores information about the result of the call

// in this case, writing to a text file named 'write_to.txt',
// the contents of the whatImWritingToFile string variable
// if the file exists, then it will overwrite the contents of the file with what ...
// ... you have as the 2nd argument here, which is the contents of the whatImWritingToFile variable
// if the file does not exist, this will create it for you
fs.writeFile('./write_to.txt', whatImWritingToFile, function(err){
	// if there's an error, then throw and error and dont run the logic below it
	if(err){
		throw err;
	}
	console.log('written to file')
})

var songs = ["Song 2", "Rock Me Gently", "Hooked on a feeling"]

// in this case, writing to a text file named 'write_to_two.txt',
// the contents of the songs array variable
fs.writeFile('./write_to_two.txt', songs, function(err){
	// if there's an error, then throw and error and dont run the logic below it
	if(err){
		throw err;
	}
	console.log('written to file')
})
