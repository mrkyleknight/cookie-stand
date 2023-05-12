'use strict';

// Tony is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Tony knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo

// **** GLOBAL VARIABLES ****test

// *** STEP 1: Grab the window into the DOM ***
let table = document.getElementById('sales-table');
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
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

let grandTotal = 0 

// Calculate the hourly totals and add them to the footer row
// let hourlyTotal = new Array(hours.length).fill(0);

for (let i = 0; i < hours.length; i++) {
  let hourlyTotal = 0;
  for (let j = 0; j < storeArray.length; j++) {
    hourlyTotal += storeArray[j].cookiesPerHour[i];
    grandTotal += storeArray[j].cookiesPerHour[i];
  }
// // Calculate the hourly totals and add them to the footer row
// let hourlyTotal = new Array(hours.length).fill(0);
// for (let i = 0; i < storeArray.length; i++) {
//   for (let j = 0; j < hours.length; j++) {
//     hourlyTotal[j] += storeArray[i].cookiesPerHour[j];

//   }


let hourlyTotalCell = document.createElement('td');
hourlyTotalCell.textContent = `${hourlyTotal}`;
footerRow.appendChild(hourlyTotalCell);

}

let hourlyGrandTotal = document.createElement('td');
hourlyGrandTotal.textContent = `${grandTotal}`;
footerRow.appendChild(hourlyGrandTotal);


// for (let i = 0; i < hours.length; i++) {
//   let hourlyTotalCell = document.createElement('td');
//   hourlyTotalCell.textContent = hourlyTotal[i];
//   footerRow.appendChild(hourlyTotalCell);
// }








// let rowFooter = document.createElement('tr');
// table.appendChild(rowFooter);




// for (let i = 0; i < hourlyTotal.length; i++) {
//   let dailyLocationTotal = document.createElement('td');
//   rowFooter.appendChild(dailyLocationTotal);
//   dailyLocationTotal



// }

// let dailyTotal = document.createElement("th");
// rowFooter.appendChild(dailyTotal);
// dailyTotal.textContent = 'Totals';
  // calculateCookiesPerHour: function(){
  //   for (let i =0; i < hours.length; i++){
  //     let hour=Math.ceil(this.randomNumCustomer(23,65) * this.avgCookieBought)
  //     this.cookiesPerHour.push(hour)
  //     this.totalDailyCookies += hour;
  //   }
  // },
 


 

//   render: function(){
// // callCalculatePerHour: 
// const seattleList = document.getElementById("Seattle")
// // forLoop: hour.length
//     // 1. Create LI tag
//     // 2. Text Content (cookieData, hour)
//     // 3. Add LI tag to Parent Element Ul
//   },

// };


// let Tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieBought: 1.2,
//   customerNumber: 0,
//   cookiesPerHour:[],
//   totalDailyCookies: 0,
//   randomNumCustomer: function(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min); 
//   },

//   calculateCookiesPerHour: function(){
//     for (let i =0; i < hours.length; i++){
//       let hour=Math.ceil(this.randomNumCustomer(3,24) * this.avgCookieBought)
//       this.cookiesPerHour.push(hour)
//       this.totalDailyCookies += hour;
//     }
//   },

//   render: function(){
//     // callCalculatePerHour: 
//     const tokyoList = document.getElementById("Dubai")
//     // forLoop: hour.length
//         // 1. Create LI tag
//         // 2. Text Content (cookieData, hour)
//         // 3. Add LI tag to Parent Element Ul
//       },
    
//     };
// // let Tokyo = {
// //   name: 'Tokyo',
// //   minCustomer: 3,
// //   maxCustomer: 24,
// //   avgCookieBought: 1.2,
// //   customerNumber: 0,
// //   randomNumCustomer: function(min, max){
// //    return Math.floor(Math.random() * (max - min + 1) + min); 
// // },
// //   getNum: function(){
// //   this.customerNumber = this.randomNumCustomer(3,24);
// // },

// //   render: function(){
// //     this.getNum();
// //   },

// // };

// // Tokyo.render();
// // console.log(Tokyo.customerNumber);
// let Dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieBought: 1.2,
//   customerNumber: 0,
//   cookiesPerHour:[],
//   totalDailyCookies: 0,
//   randomNumCustomer: function(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min); 
//   },

//   calculateCookiesPerHour: function(){
//     for (let i =0; i < hours.length; i++){
//       let hour=Math.ceil(this.randomNumCustomer(3,24) * this.avgCookieBought)
//       this.cookiesPerHour.push(hour)
//       this.totalDailyCookies += hour;
//     }
//   },

//   render: function(){
//     // callCalculatePerHour: 
//     const dubaiList = document.getElementById("Dubai")
//     // forLoop: hour.length
//         // 1. Create LI tag
//         // 2. Text Content (cookieData, hour)
//         // 3. Add LI tag to Parent Element Ul
//       },
    
//     };

//     let Paris = {
//       name: 'Paris',
//       minCustomer: 20,
//       maxCustomer: 38,
//       avgCookieBought: 2.3,
//       customerNumber: 0,
//       cookiesPerHour:[],
//       totalDailyCookies: 0,
//       randomNumCustomer: function(min, max) {
//        return Math.floor(Math.random() * (max - min + 1) + min); 
//       },
    
//       calculateCookiesPerHour: function(){
//         for (let i =0; i < hours.length; i++){
//           let hour=Math.ceil(this.randomNumCustomer(3,24) * this.avgCookieBought)
//           this.cookiesPerHour.push(hour)
//           this.totalDailyCookies += hour;
//         }
//       },
    
//       render: function(){
//         // callCalculatePerHour: 
//         const parisList = document.getElementById("Paris")
//         // forLoop: hour.length
//             // 1. Create LI tag
//             // 2. Text Content (cookieData, hour)
//             // 3. Add LI tag to Parent Element Ul
//           },
        
//         };

//         let Lima = {
//           name: 'Lima',
//           minCustomer: 2,
//           maxCustomer: 16,
//           avgCookieBought: 4.6,
//           customerNumber: 0,
//           cookiesPerHour:[],
//           totalDailyCookies: 0,
//           randomNumCustomer: function(min, max) {
//            return Math.floor(Math.random() * (max - min + 1) + min); 
//           },
        
//           calculateCookiesPerHour: function(){
//             for (let i =0; i < hours.length; i++){
//               let hour=Math.ceil(this.randomNumCustomer(3,24) * this.avgCookieBought)
//               this.cookiesPerHour.push(hour)
//               this.totalDailyCookies += hour;
//             }
//           },
        
//           render: function(){
//             // callCalculatePerHour: 
//             const limaList = document.getElementById("Lima")
//             // forLoop: hour.length
//                 // 1. Create LI tag
//                 // 2. Text Content (cookieData, hour)
//                 // 3. Add LI tag to Parent Element Ul
//               },
            
//             };
    







// *** EXECUTABLE (executes on page load) CODE ***
// Seattle.calculateCookiesPerHour();
// console.log(Seattle.cookiesPerHour);
// Tokyo.calculateCookiesPerHour();
// console.log(Tokyo.cookiesPerHour);
// Dubai.calculateCookiesPerHour();
// console.log(Dubai.cookiesPerHour);
// Paris.calculateCookiesPerHour();
// console.log(Paris.cookiesPerHour);
// Lima.calculateCookiesPerHour();
// console.log(Lima.cookiesPerHour);