// 'use strict';


// // let storeForm = document.getElementById('store-form');
// // storeForm.addEventListener('submit', function(event) {
// //   event.preventDefault(); // Prevent form submission
  
// //   // Get input values
// //   let name = document.getElementById('store-name').value;
// //   let minCustomer = parseInt(document.getElementById('min-customer').value);
// //   let maxCustomer = parseInt(document.getElementById('max-customer').value);
// //   let avgCookieBought = parseInt(document.getElementById('avg-cookies').value);
  
// //   // Create new store
// //   let newStore = new SalmonCookieStand(name, minCustomer, maxCustomer, avgCookieBought);
// //   newStore.simulateCookies();
// //   newStore.displayResults();
  
// //   // Reset form
// //   storeForm.reset();
// // });

// let footerRow = document.querySelector('#sales-table tfoot tr');

// // Create a new row for the form
// let formRow = document.createElement('tr');

// // Create form cells
// let formNameCell = document.createElement('td');
// let formNameInput = document.createElement('input');
// formNameInput.setAttribute('type', 'text');
// formNameInput.setAttribute('placeholder', 'Enter store name');
// formNameCell.appendChild(formNameInput);
// formRow.appendChild(formNameCell);

// for (let i = 0; i < hours.length; i++) {
//   let formCookiesCell = document.createElement('td');
//   let formCookiesInput = document.createElement('input');
//   formCookiesInput.setAttribute('type', 'number');
//   formCookiesInput.setAttribute('min', '0');
//   formCookiesInput.setAttribute('placeholder', `Cookies sold at ${hours[i]}`);
//   formCookiesCell.appendChild(formCookiesInput);
//   formRow.appendChild(formCookiesCell);
// }

// let formSubmitCell = document.createElement('td');
// let formSubmitButton = document.createElement('button');
// formSubmitButton.textContent = 'Submit';
// formSubmitCell.appendChild(formSubmitButton);
// formRow.appendChild(formSubmitCell);

// // Add the form row before the footer row
// table.insertBefore(formRow, footerRow);