/*

1. Create a .txt file in this directory. Use the terminal to create the text file please.
2. Using process.argv, check to see if the 3rd argument (process.arg[2]) you're using is in the text file
3. If there are any arguments after the 3rd argument (process.arg[2]), dont run the logic
4. when checking if the text is in the data file, you can set the text to lowercase for the logic
   i.e. if the file reads 'bad', and you input 'Bad', the logic should state that the text is in the file

*/

var fs = require('fs');
var argument = process.argv[2];

// logging the command line arguments
console.log(process.argv)

if(process.argv.length == 3){
  fs.readFile('./read.txt', 'utf-8', function(err, data){
  	if(err){
      // if there's an error then dont run the logic
  		throw err;
  	}
    // if there is no error, then
    // getting the content in the text file
    console.log(data)

    // third argument (process.argv[2] to lowercase)
    console.log(argument.toLowerCase())

    if(data.indexOf(argument.toLowerCase()) > -1){
      console.log("text is in file")
    } else {
      console.log("text is not in file")
    }
  })
} else {
  console.log("Too many arguments")
}
