// // // Array (variable yang dpt menyimpan banyak data)
// // const students = ["john", "peter", "jack", "jane"];
// // const numbers = [1, 2, 3, 4, 5];
// // const john = ["john", "doe", 33, true];

// // console.log(students);
// // console.log(numbers);
// // console.log(john);
// // //Index
// // console.log(students[2]); //tampilkan
// // students[2] = "Bob"; //ubah
// // console.log(students);
// // //Length
// // console.log(students.length);
// // console.log(students[students.length - 1]);
// // //Mengakses seluruh elemen array
// // for (let i = 0; i < students.length; i++) {
// //     console.log(students[i]);
// // }

// // //Array Method
// // //toString()
// // console.log(john.toString());
// // //Join()
// // console.log(john.join(" "));
// // console.log(john.join("#"));
// // console.log(john.join("..."));
// // // Menghapus elemen terakhir (Pop)
// // john.pop();
// // console.log(john);
// // // Tambah elemen terakhir (Push)
// // john.push("Good morning sunshine");
// // console.log(john);
// // //shift (keluarkan elemen pertama)
// // john.shift();
// // console.log(john);
// // //unshift (tambah elemen depan)
// // john.unshift("Hello");
// // console.log(john);
// // //splice (tambah elemen ditengah) (kalo mo hapus kase 0)
// // john.splice(3, 0, true);
// // console.log(john);
// // //slice (babungkus)
// // let john2 = john.slice(2, 4);
// // console.log(john2);
// // //concat
// // let output = john.concat(numbers, john2);
// // console.log(output);

// // Object (key dan value)
// let john = {
//     firstName: 'John';
//     lastName: 'Doe';
//     age: 33;
//     isMarried: true,
//     grade [80, 90, 100], // didalam object bisa ada array
//    address: {
//     city: "Manado",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//    }, //didalam object bisa ada object
//    sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName) //access properti dalam object
//    },
// };

// // 2 cara access elemen
// //1. dot notation

// // console.log(john.firstName);
// // console.log(john.grade[2]);
// // console.log(john.address.city);
// // console.log(john.sayGreetings());

// //2. Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// //menambahkan properti baru dalam object
// john.job = "Teacher";
// console.log(john);

// // Array Object

// let students = [
//     {
//         id: 1,
//         name: "john",
//     },
//     {
//          id: 2,
//          name: "jack",
//     },
//     {
//         id: 3,
//         name: "Peter",
//     },
// ]

// //forEach()
// // students.forEach(function (time) {
// //     console.log(item.name);
// // });

// //map()
// let output = students.map(function (time) {
//     return item.name;
// });
// console.log(output);
