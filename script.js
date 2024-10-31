// Fetch data from sheetData.json
fetch('sheetData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    displayData(data);
  })
  .catch(error => console.error('Error loading sheet data:', error));

// Function to display the data on the webpage
function displayData(data) {
  const container = document.getElementById('data-container');

  // Loop through each row in the data values array
  data.values.forEach((row, index) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    
    row.forEach((cell, cellIndex) => {
      const cellDiv = document.createElement('span');
      cellDiv.classList.add('cell');
      cellDiv.textContent = cell || '';  // Display cell content or an empty string if empty
      rowDiv.appendChild(cellDiv);
    });

    container.appendChild(rowDiv);
  });
}
