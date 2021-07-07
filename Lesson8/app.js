const cars = ['Audi','Opel', 'Fiat'];
console.log(typeof cars);
console.log(cars);

const numbers1 = new Array(2,10);
const numbers2 = new Array(10); // uzunluğu 10 olan boş bir array verir
console.log(numbers1);
console.log(numbers2);


const cars2 = ['Audi','Opel', 'Fiat'];
cars2[2] = 'BMW'
console.log(cars2);


// .length property --> uzunluğunu verir

console.log(cars2.length);

// concat() method --> arrayleri birleştirir.

console.log(cars.concat(cars2,'Mercedes',2021));
console.log(cars+cars2); //string olarak işlem yapıyor

