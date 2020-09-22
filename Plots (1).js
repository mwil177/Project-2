// Create the array

console.log(gwData);
var GT = Object.values(gwData.GT);
var SL = Object.values(gwData.SL);
var IC = Object.values(gwData.IC);

var labels = Object.keys(gwData.GT);
console.log(GT[0]);


function init() {
  
  Highcharts.chart('container', {
    title: {
      text: "Global Temperature by Year"
    },
    xAxis: {
      categories: GT[0],
      title: {
        text: "Year"
      }
    },
    series: [{
      type: 'line',
      data: GT[1],
      title: {
        text:  "Temperature (C)"
      }
    }],
  });
};  

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);


// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the data
  // Initialize x and y arrays
  var categories = [];
  var data = [];

  if (dataset === 'Global Temperature') {
    Highcharts.chart('container', {
      title: {
        text: "Global Temperature by Year"
      },
      xAxis: {
        categories: GT[0],
        title: {
          text: "Year"
        }
      },
      series: [{
        type: 'line',
        data: GT[1],
        title: {
          text:  "Temperature (C)"
        }
      }],
    });
  };  
  
  
  if (dataset === 'Sea Level') {
    Highcharts.chart('container', {
      title: {
        text: "Sea Level by Year"
      },
      xAxis: {
        categories: SL[0],
        title: {
          text: "Year"
        }
      },
      series: [{
        type: 'line',
        data: SL[1],
        title: {
          text:  "Sea Level Increase (mm)"
        }
      }],
    });
  };  
    
  
  if (dataset === 'Ice Caps') {
    Highcharts.chart('container', {
      title: {
        text: "Ice Cap Area by Year"
      },
      xAxis: {
        categories: IC[0],
        title: {
          text: "Year"
        }
      },
      series: [{
        type: 'line',
        data: IC[1],
        title: {
          text:  "Ice Cap Area ()"
        }
      }],
    });
  };  
    
  

};

init();
