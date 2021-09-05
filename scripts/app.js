// import { columns, delimiter, lines } from "./getInput"
// console.log(columns, delimiter, lines);

//import fs from 'fs';
const fs = require('fs')
let columns = 5;
let delimiter = ';';
let lines = 1000;
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 
    'z'
];



// this function will create the csv file into a string 
let data =  '';
const create = (columns, delimiter, lines) => {
    let text = '';
    for (let i = 0; i < lines; i++) {
        let str = '';
        for (let j = 0; j < columns; j++) {
            str = '';
            let strLen = Math.random() % 25;
            for (let k = 0; k < strLen; k++) {
                //str.concat(alphabet[Math.random() % 25]);\
                str += alphabet[Math.random() % 25];
            }
            //str.concat(str + delimiter);
            str += str + delimeter;
        }
        text += str + '\n';
        // text.concat(str + '\n');
    }
    return text;
}



// data will then be writtinginto a file
data = create(columns, delimiter, lines);
console.log(data);
fs.writeFile('CSV_Test_File.txt', data, (err) => {
    if (err) throw err;
});



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

// Start file download.
download("CSV_Test_File.txt", data);
export { data };



// Put the data into a variable to be outputted into html
window.onload = () => {
    let len = data.length;
    document.getElementById(data).innerHTML = len;
} 