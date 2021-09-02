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
let data =  '';
const create = (columns, delimiter, lines) => {
    let text = '';
    for (let i = 0; i < lines; i++) {
        let str = '';
        for (let j = 0; j < columns; j++) {
            str = '';
            let strLen = Math.random() % 25;
            for (let k = 0; k < strLen; k++) {
                str.concat(alphabet[Math.random() % 25]);
            }
            str.concat(str + delimiter);
        }
        text.concat(str + '\n');
    }
    return text;
}
data = create(columns, delimiter, lines);
console.log(data);
fs.writeFile('CSV_Test_File.txt', data, (err) => {
    if (err) throw err;
});