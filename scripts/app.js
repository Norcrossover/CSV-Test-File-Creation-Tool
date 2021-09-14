//import { columns, delimiter, lines } from "./getInput";
// console.log(columns, delimiter, lines);
import { columns, delimiter, lines } from "./getInput.js";
const fs = require('fs')
let columns = 2;
let delimiter = ';';
let lines = 10000;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const charsLength = chars.length;



// ============== this function will create the csv file into a string ============
const create = (columns, delimiter, lines) => {
    let text = '';
    let str = '';
    // loops through each line
    for (let i = 0; i < lines; i++) {
        // loops through each column
        for (let j = 0; j < columns; j++) {
            str = '';
            let maxLength = 15;
            let strLen = Math.floor(Math.random() * maxLength) + 10;
            // loops through each string
            for (let k = 0; k < strLen; k++) {
                let val = chars[Math.floor(Math.random() * charsLength)];
                str += val;
            }
            if ((j+1) === columns) {
                text += `${str}`;
            } else {
                text += `${str}${delimiter}`;
            }
        }
        text += '\n';
    }
    return text;
}



// ==================== data will then be written into a file ================
let data = create(columns, delimiter, lines);
//console.log(`Data is:\n${data}`);
// fs.writeFile('CSV_Test_File.txt', data, (err) => {
//     if (err) throw err;
// });




// then the download function will allow for the file to be downloaded 
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}



// Put the data into a variable to be outputted into html
window.onload = () => {
    let len = data.length;
    document.getElementById(data).innerHTML = len;
} 



// Start file download.
download("CSV_Test_File.txt", data);
//export { data };
