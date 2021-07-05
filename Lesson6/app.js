function hello() {
    console.log("hello\n\n\n");
}

hello()


function sum(a,b) {
    return +a+b; 
}

console.log("sum =",sum(3,4));
console.log("typeof sum =>",typeof sum);
console.log("typeof sum() =>",typeof sum(),"\n\n\n");






function sum2(a,b) {
    return +a+b; // + işareti herhangi bir type conversion yapmadan a yı number a dönüştürür.
}
console.log(sum2(3,"2"));
console.log(sum2("3",2));





function sum3(a,b) {
    return Number(a)+Number(b); 
}
console.log(sum3(3,"2"));
console.log(sum3("3",2)+"\n\n\n");



//*************************************************************
/* Fonksiyona giren objeler değiştirilirse dışarıda da değişir ama diğer değerler fonksiyon içerisinde değişirse dışarıda değişmez */



function sayHi(myName) {
    console.log(`Hi ${myName}`);
    myName = "Ed"
    console.log(`Hi ${myName}`);
}

myName = "Mark"
sayHi(myName);
console.log("myName outside function = > ",myName,"\n\n\n");


let student = {};
student.name = "Mark"

function sayHi2(student) {
    console.log(`Hi ${student.name} entry point`)
    ;
    student.name = "John";
    console.log(`Hi ${student.name} first point`)
    ;
}

sayHi2(student);
console.log(`Hi ${student.name} outside point \n\n\n`);


//*************************************************** 

function div(n1,n2) {
    return n2 ? n1/n2 :"Zero division error"
}

console.log(div(1,2));
console.log(div(1,0));



console.log("\n\n\n");
//*************************************************** 

function sum6 (a,b,...args) {
    console.log("args",args);
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}

sum6(1,2,3,4,5)



console.log("\n\n\n");
/******************************************************************* */
//function expression

//syntax : let fnk = function(args){....};
// fonksiyon ismi eşittirden önce yazlır ve süslü parantezden sonra noktalı virgül kullanılır.

const fnk1 = function(a,b) {//ram den tasarruf etmek için bu şekilde kullanılır
    return Number(a)+Number(b);
};

console.log(fnk1(3,2)+"\n\n\n");


//**************************************************** */

//recursive fonksiyonlar



const pascalNumber1 = function(n){ //recursive değil
    return(n*(n+1)/2);
};

console.log(pascalNumber1(4));

const pascalNumber2 = function total(n){ //recursive yaparken ilk önce çıkış noktasını belirlemek gerekir
    if(n===1) return 1;
    return n + pascalNumber2(n-1);
    //return n + total(n-1); // fonksiyonu kendi içinde kendi ismi "total" ile çağırabiliriz
};

console.log(pascalNumber2(4));



//**************************************************** */

//Immediately invoked function expression

//fonksiyon sadece 1 kez çalışıyorsa kullanılır



let result = (function pascalNumber3(num) {
    if(num === 1) return 1;
    return num + pascalNumber3(num-1);
})(4);

console.log(result);




(function pascalNumber3(num) {
    let sum = 0;
    while (num>=0) {
        sum += num;
        num--;
    }
    console.log("Result : ",sum);
})(4);



console.log("\n\n\n\n");
//******************************************************** */

//Arrow Function

const multi = (x,y) => x * y;
console.log(multi(3,5));


const multi2 = (x,y) => {
    let c = x*y;
    return c;
}

console.log(multi2(3,5));




let user = "Ali";
const sayHi3 = (xxx = "New User") => `Welcome ${xxx}`;
console.log(sayHi3(user));
console.log(sayHi3());




// Zero division Error
// const div = (num1,num2) => num1 /num2;
/* const div = (num1,num2) => {
    if(num2 === 0){
        return 'Zero Division';
    }
    return num1/num2
} */
​
/* const div = (num1,num2) => num2 ? num1 / num2 :'Zero division Error!'
​
​
​
console.log(div(18,2));
 */


