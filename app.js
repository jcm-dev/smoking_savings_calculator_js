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
  // parse text inputs into float
  const parsePrice = parseFloat(UIprice.value);
  const parseDaily = parseFloat(UIdaily.value);
  const parseYears = parseFloat(UIcustYears.value);
  // calculate for each UIouput variable
  const packPerYear = (parseDaily * 365) / 20;
  // test input for acceptable value
  // if acceptable then assign calculations to results
  if(isFinite(packPerYear)){
  UItotalDaily.value = (parsePrice / 20).toFixed(2);
  UItotalMonthly.value = (packPerYear / 12).toFixed(2);
  UItotalYearly.value = (packPerYear * parsePrice).toFixed(2);
  UItotalCustom.value = ((packPerYear * parsePrice) * parseYears).toFixed(2);

  // display results
  document.getElementById('results').style.display = 'block';

  }else{
    showError('Please check entry fields.');
  }
}

// DISPLAY ERROR
function showError(error){
  // hide results if attempt(s) after initial
  // are invalid
  document.getElementById('results').style.display = 'none';
  // create an empty <div> to insert the error message
  const UIerrorDiv = document.createElement('div');
  // grab elements to insert <div> before
  const UIcard = document.querySelector('.card');
  const UIheading = document.querySelector('.heading');
  // assign bootstrap error classes to div
  UIerrorDiv.className = 'alert alert-danger';
  // create text node accepting our error message
  // parameter and append it to UIerrorDiv
  UIerrorDiv.appendChild(document.createTextNode(error));
  // insert UIerrorDiv
  UIcard.insertBefore(UIerrorDiv, UIheading);

}

// CLEAR ERROR