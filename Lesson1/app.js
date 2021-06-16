
// console.log('Hello world!');
// console.info('info')
// console.warn('warn');
// console.error('error');

var name = 'Mark';
console.log(name);


const PI = 3.14159265359;
const SCHOOL = 'Clarusway';
console.log('PI : ' + PI);


let myNum = 321;
console.log('myNum : ' + myNum);

var country = prompt('Enter your country : ');
console.log('Your country is',country);


var num1 = 42;

if(num1 == 42) {
    let num2 = 22;
    console.log(num2);
}
// console.log(num2)   // num2 sadece if scope da tanımlı


console.log(num3); // değer ataması sonradan yapıldığında 
//var için "undifined",
//let için "Uncaught ReferenceError: Cannot access 'num3' before initialization at app.js:32"
var num3 = 3;
// let num3 = 3;

function funct1() {
    var num4 = 6;
    if (true){
        console.log(num4)
    }
}

// console.log(num4); 
/* num4 var olarak tanımlandığı için ve var fonksiyon tabanlı
 olduğu için dışarıda tanmlı olmaz*/

 funct1()