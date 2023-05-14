'use strict';



let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let table = document.getElementById('sales-table');
let storeArray =[];



function SalmonCookieStand(name, minCustomer, maxCustomer, avgCookieBought) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieBought = avgCookieBought;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  storeArray.push(this)
}

SalmonCookieStand.prototype.randomNumCustomer = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
}

SalmonCookieStand.prototype.simulateCookies = function() {
  for (let i = 0; i < hours.length; i++) {
    let customers = this.randomNumCustomer();
    this.customersPerHour.push(customers);
    let cookiesBought = Math.round(this.avgCookieBought * customers);
    this.cookiesPerHour.push(cookiesBought);
    this.totalDailyCookies += cookiesBought;
  }
}

SalmonCookieStand.prototype.displayResults = function() {
 
  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);
  for (let i = 0; i < hours.length; i++) {
    let cookiesCell = document.createElement('td');
    cookiesCell.textContent = this.cookiesPerHour[i];
    row.appendChild(cookiesCell);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalDailyCookies;
  row.appendChild(totalCell);
  table.appendChild(row);
}

// Create the header row
let headerRow = document.createElement('tr');

// Create an empty cell to align with the store name column
let headerCell = document.createElement('th');
headerRow.appendChild(headerCell);

// Create header cells for each hour
for (let i = 0; i < hours.length; i++) {
  let headerCell = document.createElement('th');
  headerCell.textContent = hours[i];
  headerRow.appendChild(headerCell);
}

// Create a header cell for the daily total
let totalHeaderCell = document.createElement('th');
totalHeaderCell.textContent = 'Daily Total';
headerRow.appendChild(totalHeaderCell);

// Add the header row to the table
table.appendChild(headerRow);

let seattle = new SalmonCookieStand('Seattle', 23, 65, 6.3);
seattle.simulateCookies();
seattle.displayResults();

let tokyo = new SalmonCookieStand('Tokyo', 3, 24, 1.2);
tokyo.simulateCookies();
tokyo.displayResults();

let dubai = new SalmonCookieStand('Dubai', 11, 38, 3.7);
dubai.simulateCookies();
dubai.displayResults();

let paris = new SalmonCookieStand('Paris', 20, 38, 2.3);
paris.simulateCookies();
paris.displayResults();

let lima = new SalmonCookieStand('Lima', 2, 16, 4.6);
lima.simulateCookies();
lima.displayResults();





// Create the footer row
let footerRow = document.createElement('tr');
table.appendChild(footerRow);

// Create the "Totals" label cell
let totalsLabelCell = document.createElement('td');
totalsLabelCell.textContent = 'Totals';
footerRow.appendChild(totalsLabelCell);

let grandTotal = 0; 



for (let i = 0; i < hours.length; i++) {
  let hourlyTotal = 0;
  for (let j = 0; j < storeArray.length; j++) {
    hourlyTotal += storeArray[j].cookiesPerHour[i];
    grandTotal += storeArray[j].cookiesPerHour[i];
  }


            


let hourlyTotalCell = document.createElement('td');
hourlyTotalCell.textContent = `${hourlyTotal}`;
footerRow.appendChild(hourlyTotalCell);

}

let hourlyGrandTotal = document.createElement('td');
hourlyGrandTotal.textContent = `${grandTotal}`;
footerRow.appendChild(hourlyGrandTotal);





let storeForm = document.getElementById('store-form');
storeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // the input values
  let name = document.getElementById('store-name').value;
  let minCustomer = parseInt(document.getElementById('min-customer').value);
  let maxCustomer = parseInt(document.getElementById('max-customer').value);
  let avgCookieBought = parseInt(document.getElementById('avg-cookies').value);
  
  // Remove the existing footer row
  let footerRow = table.lastElementChild;
  table.removeChild(footerRow);
  
  // Create the new store
  let newStore = new SalmonCookieStand(name, minCustomer, maxCustomer, avgCookieBought);
  newStore.simulateCookies();
  newStore.displayResults();

  // Calculate and render the new footer row
  renderFooter();
  
  // Reset form
  storeForm.reset();
});

function renderFooter() {
  // Create the footer row
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  // Create the "Totals" label cell
  let totalsLabelCell = document.createElement('td');
  totalsLabelCell.textContent = 'Totals';
  footerRow.appendChild(totalsLabelCell);

  let grandTotal = 0;

  // Calculate the hourly totals and add them to the footer row
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourlyTotal += storeArray[j].cookiesPerHour[i];
      grandTotal += storeArray[j].cookiesPerHour[i];
    }
    let hourlyTotalCell = document.createElement('td');
    hourlyTotalCell.textContent = `${hourlyTotal}`;
    footerRow.appendChild(hourlyTotalCell);
  }

  let hourlyGrandTotal = document.createElement('td');
  hourlyGrandTotal.textContent = `${grandTotal}`;
  footerRow.appendChild(hourlyGrandTotal);

}


const form = document.getElementById('poll-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting normally
  const selectedOption = document.querySelector('input[name="poll-option"]:checked').value;
  // process the poll results
});
