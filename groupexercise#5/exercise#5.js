// #1 Destructing Array & Object

// Array Destructuring
const [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

// Object Destructuring
const mahasiswa = { nama: 'Brianna', umur: 20 };
const { nama, umur } = mahasiswa;
console.log(nama); 
console.log(umur);

// #2 Destructuring dengan mengambil sebagian item (Array & Object)

// Array Destructuring
const [d, , e] = [1, 2, 3];
console.log(d);
console.log(e); 

// Object Destructuring
// const user = { username: 'vicanana', email: 'vica@gmail.com', password: 'unklab12345' };
// const { username, ...rest } = user;
// console.log(username);
// console.log(rest);

// #3 Destructuring dengan menggunakan default value (Array & Object)

// Array Destructuring dengan Default Value
const [x = 0, y = 0] = [7];
console.log(x);
console.log(y);

// Object Destructuring dengan Default Value
// const person = { name: 'Devan' };
// const { name, age = 21 } = person;
// console.log(name);
// console.log(age); 

// #4 Destructuring dengan menggunakan rest operator (Array & Object)

// Array Destructuring dengan Rest Operator
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest); 

// Object Destructuring dengan Rest Operator
const person = { name: 'Yuki', age: 20, country: 'Indonesia' };
const { name, ...info } = person;
console.log(name);
console.log(info);