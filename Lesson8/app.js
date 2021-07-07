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



//sort() method---> herşeyi string olarak değerlendirir örn: "21">"133"*****çözüm yolu aşağıda


console.log([1,52,21,13,255].sort());
console.log([1,52,21,13,255].sort(function(a,b){return a-b}));//sayılarla ilgili sıkıntıyı çözüyor

//push()--> arrayin sonuna ekleme yapıyor
//pop()--> arrayin son elemanını siliyor.Parametre almaz

console.log(cars.push('Renault'));//********** */
console.log(cars);

console.log(cars.pop());//******** */
console.log(cars);



// shift() --> ilk elemanı silip, sildiği elemanı döndürür

console.log(cars.shift());
console.log(cars);

//unshift() --> en başa ekler.

console.log(cars.unshift('VW'));
console.log(cars);


/********************************************* */
const cars3 = ['Audi','Opel', 'Fiat'];
cars3[6] = 'VW';
console.log(cars3);
console.log(cars3[3]);

/********************************************* */

// splice() method --> arraye yeni elemanlar eklemek yada çıkarmak için kullanılır; sildiklerini döndürür

console.log(cars);
console.log(cars.splice(1,1,'VW'));
console.log(cars);
console.log(cars.splice(1,0,'BMW'));
console.log(cars);


// slice() --> orjinal arrayi bozmadan yeni array üretir

console.log(cars);
console.log(cars.slice(1,3));
console.log(cars.slice(-3,3));
console.log(cars.slice(-3,0)); // sola doğru gitmez, her zaman sağa doğru okur



// reverse() --> son indexte başa doğru arrayi ters çevirir. Array değişir.


console.log(cars);
console.log(cars.reverse());
console.log(cars);


// indexof() method --> arana elemanı ilk gördüğü indexi döndürür. eğer bulamazsa -1 döndürür. İkinci bir index girilirse o indexten sonrasına bakar

console.log(cars.indexOf('VW'));
console.log(cars.indexOf('VW',2));
console.log(cars.indexOf('DDD',2));



//lastIndexOf() -->indexof methodunu sağdan sola doğru yapar

console.log(cars.lastIndexOf('VW'));
console.log(cars.lastIndexOf('VW',2));


console.log(cars);
const [x,y,z] = cars
console.log(x,y,z);
const [t,...others] = cars;
console.log(others);
console.log(Array.isArray(others));
console.log(others instanceof Array);




let a = 5;
let d = 6;

console.log(a,d);
 [a,d] = [d,a]
 console.log(a,d);



 //Array iterations *****************************************************************************************

 for (let i = 0; i < cars.length; i++) {//empty' i undefined döndürür
     const element = cars[i];
     console.log(element);
     
 }

 for (i of cars){ //empty' i undefined döndürür
     console.log(i);
 }

 for (const i in cars) {//empty'i görmez
     
         const element = cars[i];
         console.log(element);
     
 }

 cars.forEach(element => { //empty'i görmez
     console.log(element);
 });