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
  const UItotalDaily = document.getElementById('total-daily');
  const UItotalMonthly = document.getElementById('total-monthly');
  const UItotalYearly = document.getElementById('total-yearly');
  const UItotalCustom = document.getElementById('total-custom');

  // calculate for each UIouput variable
  const packPerYear = (UIdaily * 365) / 20;
  UItotalDaily = UIprice / 20;
  UItotalMonthly = packPerYear / 12;
  UItotalYearly = packPerYear * UIprice;
  UItotalCustom = (packPerYear * UIprice) * UIcustYears;
}

// DISPLAY ERROR

// CLEAR ERROR