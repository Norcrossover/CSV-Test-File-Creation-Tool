//import { columns, delimiter, lines } from "./getInput";
// console.log(columns, delimiter, lines);
// import { columns, delimiter, lines } from "./getInput.js";
// const fs = require('fs')

// let columns = document.getElementById("columns").value;
// let delimiter = document.getElementById("delimiter").value;
// let lines = document.getElementById("lines").value;
// console.log(`columns: ${columns}`);
// console.log(`delimiter: ${delimiter}`);
// console.log(`lines: ${lines}`);
// let columns = prompt("Enter the number of columns you want: ");
// let lines = prompt("Enter the number of lines you want: ");
// let delimiter = prompt("Enter the delimiter you want to use: ");
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const charsLength = chars.length;




let formdata = () => {
    let columns = document.getElementById("columns").value;
    let lines = document.getElementById("lines").value;
    let delimiter = document.getElementById("delimter").value;
    document.writeln("<h1>Confirmation Page</h1><br>");
    document.writeln("Thank you for completing this form.<br><br>");
    // document.writeln("The first name you entered is " + firstname1 + "<br>");
    // document.writeln("The last name you entered is " + lastname1);
}



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
            if ((j+2) === columns) {
                text += `${str}`;
            } else {
                text += `${str}${delimiter}`;
            }
        }
        text += '\n';
    }
    return text;
}



// // ==================== data will then be written into a file ================
formdata();
let data = create(columns, delimiter, lines);
//console.log(`Data is:\n${data}`);
// fs.writeFile('CSV_Test_File.txt', data, (err) => {
//     if (err) throw err;
// });




// then the download function will allow for the file to be downloaded 
// const download = (filename, text) => {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
// }


// Put the data into a variable to be outputted into html
window.onload = () => {
    let len = data.length;
    document.getElementById(data).innerHTML = len;
} 


// Start file download.
// download("CSV_Test_File.txt", data);
//export { data };
