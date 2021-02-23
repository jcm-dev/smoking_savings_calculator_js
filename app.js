// SUBMIT LISTENER
document.getElementById('savings-form').addEventListener('submit', function(e){

  calculateResults();

  e.preventDefault();
});

// CALCULATE RESULTS
function calculateResults(){
  // UIinput variables
  const UIprice = document.getElementById('price');
  const UIdaily = document.getElementById('daily');
  const UIcustYears = document.getElementById('years');
  // UIoutput variables
  const UItotalMonthly = document.getElementById('total-monthly');
  const UItotalYearly = document.getElementById('total-yearly');
  const UItotalCustom = document.getElementById('total-custom');
}

// DISPLAY ERROR

// CLEAR ERROR