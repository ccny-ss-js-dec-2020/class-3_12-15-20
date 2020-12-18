/*

- Create a txt file in this directory
- Read the text file
  - If there are contents in the text file:
    - Get those contents
    - Get the third argument(process.argv[2])
    - Concatanate the current file contents and third argument with commands
      i.e. if the file contains "hello" and you run "node index.js goodybe" ...
      ... the file will now look like "hello,goodbye"
    - Write the concatanated value to the text file
    - This is how you do not completely overwrite the text file
  - If there are no contents in thext file:
    - Get the third argument(process.argv[2])
    - Add the value of the third argument to the text file

 Bonus, check to see if a txt file exists using 'fs.existsSync(path)'
 Instead of creating the text file with step 1 above
    if(fs.existsSync(path)){
      // if file exists then read from it
    } else {
      // if file doesnt exist then create it
  }

*/
var fs = require("fs");
var argumentThree = process.argv[2];

var fileNameAndPath = "./append_to_me.txt"

// if the file exists ...
if(fs.existsSync(fileNameAndPath)){
  // ... if the file does exists, then do this
  fs.readFile(fileNameAndPath, 'utf-8', function(readErr, data){
    if(readErr){
      throw readErr
    }
    var newContents;
    console.log("data is: " + data)
    if(data){
      console.log("there is data in the file")
      // current text in the file + the third argument (process.argv[2])
      // and separated by a comma
      newContents = data + "," + argumentThree
    } else {
      console.log("there is no data in the file")
      newContents = argumentThree
    }
    // calling the function i made below
    writeContentsToFile(fileNameAndPath, newContents);
  })
} else {
  // ... if the file does not exist, then do this

  // calling the function i created below
  writeContentsToFile(fileNameAndPath, argumentThree)
}

/* writing this function because this logic is being used more than once in this application */
function writeContentsToFile(filePath, contents){
  fs.writeFile(filePath, contents, function(writeErr){
    if(writeErr){
      throw writeErr;
    }
    console.log('written to file')
  })
}
