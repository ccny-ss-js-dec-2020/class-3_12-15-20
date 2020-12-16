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
