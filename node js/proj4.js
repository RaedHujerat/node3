// Raed Hujerat & Aiham Sabtan ראיד חוגיראת ו איהם סבתאן
const fs = require('fs');
const files =
[
  "file1.txt",
  "file2.txt"
, "file3.txt",
  "file4.txt" ,
  "file5.txt",
  "file6.txt" ,
  "file7.txt",  
  "file8.txt" ,
  "file9.txt",
  "file10.txt"
]; 
let result = "";


for ( let i = 0 ; i <files.length; i++ )
  { 
const content = fs.readFileSync(files[i],"utf-8");
const lines = content.split(/\r?\n/);
if (lines[lines.length - 1 ]== ""){
} lines.pop();


for (let j = 0 ; j < i + 1 && j < lines.length; j++) {
  result += lines[j] + "\n";

}
fs.writeFileSync("output.txt", result, "utf-8");

  } 
