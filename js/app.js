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

// **** GLOBAL VARIABLES ****

// *** STEP 1: Grab the window into the DOM ***
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let Seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieBought: 6.3,
  customerNumber: 0,
  // cookiesPerHour:[],
  totalDailyCookies: 0,
  randomNumCustomer: function(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min); 
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer(23,65);
    return this.customerNumber;

  },


  cookiePurchase: [],
  totalCookies: 0,

  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = (this.avgCookieBought * this.getNum());
      console.log (cookiesBought);
      this.totalCookies += cookiesBought;

      this.cookiePurchase.push(cookiesBought);

    }
  }      
            
}
Seattle.render();

console.log(this.cookiePurchase);
console.log('TotalSales:', this.totalCookies);
  
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