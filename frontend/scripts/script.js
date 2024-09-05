import fs from "fs";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const fakerUrl = "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";

const getFormData = () => {
  const columns = document.getElementById("columns").value;
  const lines = document.getElementById("lines").value;
  const delimiter = document.getElementById("delimiter").value;
  document.writeln("<h1>Confirmation Page</h1><br>");
  document.writeln("Thank you for completing this form.<br><br>");
  // document.writeln("The first name you entered is " + firstname1 + "<br>");
  // document.writeln("The last name you entered is " + lastname1);
};

const appendNewColumn = (currCol, newColStr, del, totalNumCols) => {
  return currCol === totalNumCols ? newColStr : `${newColStr}${del}`;
};

const createNewStrOfChars = () => {
  let newColStr = "";
  let newColStrLen = Math.floor(Math.random() * 15) + 10;
  for (let k = 0; k < newColStrLen; k++) {
    let newChar = chars[Math.floor(Math.random() * charsLength)];
    newColStr += newChar;
  }

  return newColStr;
};

const createCsvFileString = (columns, delimiter, lines) => {
  let lineOfText = "";
  let newColStr = "";

  for (let i = 0; i < lines; i++) {
    // add new logic for varying data types through APIs
    // - unique names
    // - phone numbers
    // - etc
    for (let j = 0; j < columns; j++) {
      newColStr = createNewStrOfChars();
      lineOfText += appendNewColumn(j, newColStr, delimiter, columns);
    }
    lineOfText += "\n";
  }
  return lineOfText;
};

const convertCsvFileStringToFile = () => {
  //console.log(`Data is:\n${data}`);
  // fs.writeFile('CSV_Test_File.txt', data, (err) => {
  //     if (err) throw err;
  // });
};

// // ==================== data will then be written into a file ================
// add a submit button that will activate this
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
  getFormData();
  let data = createCsvFileString(columns, delimiter, lines);
});

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
};

// Start file download.
// download("CSV_Test_File.txt", data);
//export { data };
