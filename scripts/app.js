// import { columns, delimiter, lines } from "./getInput"
// console.log(columns, delimiter, lines);

import fs from 'fs';
let columns = 5;
let delimiter = ';';
let lines = 1000;
const alphabet = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
]
const data =  '';
const create => (columns, delimiter, lines) {
    let str = '';
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            
        }
        
    }
}
fs.writeFile('CSV_Test_File.txt', data, (err) => {
    if (err) throw err;
});