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

  const parsePrice = parseFloat(UIprice.value);
  const parseDaily = parseFloat(UIdaily.value);
  const parseYears = parseFloat(UIcustYears.value);
  // calculate for each UIouput variable
  const packPerYear = (parseDaily * 365) / 20;

  if(isFinite(packPerYear)){
  UItotalDaily.value = (parsePrice / 20).toFixed(2);
  UItotalMonthly.value = (packPerYear / 12).toFixed(2);
  UItotalYearly.value = (packPerYear * parsePrice).toFixed(2);
  UItotalCustom.value = ((packPerYear * parsePrice) * parseYears).toFixed(2);

  // display results
  document.getElementById('results').style.display = 'block';

  }else{
    // showError('Please check entry');
    console.log('asd');
  }
}

// DISPLAY ERROR

// CLEAR ERROR