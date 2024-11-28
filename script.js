const character = "#"; //Holds the character used to build the pyramid
const count = 8; //Represents the total number of rows for the pyramid.
const rows = []; //An array that will store each row of the pyramid as a string.
let inverted = true; //A boolean flag that determines whether the pyramid is inverted.

//The current row => rowNumber.
//The total number of rows in the pyramid  => rowCount.
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) + // Adds spaces to center the row.
    character.repeat(2 * rowNumber - 1) + //Creates the actual row of #
    " ".repeat(rowCount - rowNumber) //Adds trailing spaces to center the row.
  );
}

for (let i = 1; i <= count; i++) {
  // rows are added to the start of the array, making the pyramid inverted.
  if (inverted) {
    rows.unshift(padRow(i, count));
    // rows are added to the end of the array, resulting in a normal pyramid.
  } else {
    rows.push(padRow(i, count));
  }
}

// combines all the elements of the rows array into a single string,
// with each element separated by a newline character (\n).
let result = rows.join("\n");

// Display result on the webpage
document.getElementById("output").textContent = result;
