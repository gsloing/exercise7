// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap
// menggunakan bentuk IIFE dan callback function

//IIFE
// (function () {
//     let ganjilGenap = 10;
//     let isEligible = ganjilGenap % 2 === 0 ? "genap" : "ganjil";
//     console.log(isEligible);
// })();

// // Callback Function
// function ganjilGenap(hasil, callback) {
//     const rumus = hasil % 2 === 0 ? "genap" : "ganjil";
//     callback(rumus);
// }

// ganjilGenap("13", function(rumus) {
//     console.log(rumus);
// });