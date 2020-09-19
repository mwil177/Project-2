// Create the array
var GT = Object.values(data.GT);
var SL = Object.values(data.SL);
var IC = Object.values(data.IC);

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the data
  var data = [];

  if (dataset == 'GT') {
      data = GT;
  }
  else if (dataset == 'SL') {
      data = SL;
  }
  else if (dataset == 'IC') {
      data = IC;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("line", "values", [newdata]);
}

init();
