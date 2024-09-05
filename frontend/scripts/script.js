const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const charsLength = chars.length;
const fakerUrl = "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";

const getFormData = () => {
  const columns = document.getElementById("columns").value;
  const rows = document.getElementById("rows").value;
  const delimiter = document.getElementById("delimiter").value;
  return { columns, rows, delimiter };
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

const createCsvFileString = (columns, delimiter, rows) => {
  let lineOfText = "";
  let newColStr = "";

  for (let i = 0; i < rows; i++) {
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

const convertCsvFileStringToFile = () => {};

const createTableHeader = (tableHeader, columns) => {
  for (let i = 0; i < columns; i++) {
    const th = document.createElement("th");
    th.textContent = `Column ${i + 1}`;
    tableHeader.appendChild(th);
  }
};

const createTableRows = (tableBody, rows, delimiter) => {
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const cells = row.split(delimiter);
    cells.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
};

const populateTable = (data, columns, delimiter) => {
  const tableHeader = document.getElementById("table-header");
  const tableBody = document.getElementById("table-body");
  tableHeader.innerHTML = "";
  tableBody.innerHTML = "";
  createTableHeader(tableHeader, columns);
  createTableRows(tableBody, data.trim().split("\n"), delimiter);
};

// ==================== data will then be written into a file ================

document
  .querySelector("input[type='submit']")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const { columns, delimiter, rows } = getFormData();
    const data = createCsvFileString(columns, delimiter, rows);
    console.log(data);
    populateTable(data, columns, delimiter);
  });

const createDefaultTable = () => {
  const defaultCols = document.getElementById("columns").value;
  const defaultRows = document.getElementById("rows").value;
  const defaultDel = document.getElementById("delimiter").value;
  const defaultData = createCsvFileString(defaultCols, defaultRows, defaultDel);
  populateTable(defaultData, defaultCols, defaultDel);
};

window.onload = createDefaultTable();
