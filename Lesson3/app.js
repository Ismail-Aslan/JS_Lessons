let a; /**
 var stack te tutulurken let tutulmaz bu nedenle let ya da const kullanımı sitenin daha hızlı açılmasında fayda sağlar
 */
let aa;
let aaa;
function add(a,b){
    console.log(a+b);
}
add(3,5)

let add_function =function add2(a,b){
    console.log(a+b);
}

add_function(3,5);

/* 
fonksiyonu stackte tutmaması için yukarıdaki gibi fonksiyonu bir değişkene atayabilirsin
*/



/* 

//aşağıdaki fonksiyon stack te çok fazla alan işgal ettiği için hata verdiriyor




function stackOverFlow(){
    stackOverFlow();
}
stackOverFlow() */

/*
//
// *****************OPERATORS***************
//
*/




let x = 8;
let y = 8;

console.log(x+y); // '+' opertor
console.log(x-y); // '-' opertor
console.log(x*y); // '*' opertor
console.log(x/y); // '/' opertor
console.log(x%y); // '%' opertor
console.log(x**y); // '**' opertor



console.log('x:',x,'y:',y);
y = --x
console.log('y = --x --> x:',x,'y:',y);
y = x--
console.log('y = x-- --> x:',x,'y:',y);

/*


== --> equality
!= --> inequality
=== --> strict equality >>>equal and of same type
!== --> strict-inequality
> --> greater than
< --> less than
>= --> greater than or equal
<= --> less than or equal

all comparison operators above returns true or false
*/

console.log('false == false        -->',false == false); //true
console.log(`Boolean(0)==false     -->`,Boolean(0)==false);//true
console.log("Boolean('0')==false   -->",Boolean('0')==false);//false
console.log("0==false              -->",0==false);//true
console.log("'0'==false            -->",'0'==false);//true



console.log(typeof null);
console.log("null == false                     -->",null == false);
console.log("null == true                      -->",null == true);
console.log("Boolean(null) == false            -->",Boolean(null) == false);

console.log("typeof NaN                        -->",typeof NaN);//   NaN ---> Not a Number but it's type is number:)


/* var prompt_;
while (isNaN(prompt_)) {
    prompt_ = prompt("Enter a number")
    prompt_ = Number(prompt_)
    console.log(prompt_, typeof prompt_);
    
} */


/* ******************


başında 0 olan ve rakamları 8den küçük olan sayılar girilirse js oktal sayı olarak kabul eder ve ona göre işlem yapar

console.log(003 != 3);//true

******************** */
console.log("003+023                           --> ",003+023);//cevabı 22dir
console.log("'c'.charCodeAt() --> ASCİİ code   --> ",'c'.charCodeAt());


console.log("");

var n1 = 2;
var n2 = "2";
console.log("n1 : ",n1,"n2 : ",n2);
console.log("n1+n2 = ",n1+n2); /* srting + number = string */
console.log("n2+n1 = ",n2+n1); 
console.log("n1-n2 = ",n1-n2);/* strng -number = number */

// LOGICAL OPERATORS
console.log("");
var n1 = 2;
var n2 = "2";
console.log("n1 : ",n1,"n2 : ",n2);
console.log("&& --> and");
console.log("n1 == 2 && n2 == 3 :  ",n1 == 2 && n2 == 3);

console.log("|| --> or");
console.log("n1 == 2 || n2 == 3 :  ",n1 == 2 || n2 == 3);

console.log("|| --> or");
console.log("!(n1 == 2 || n2 == 3) :  ",!(n1 == 2 || n2 == 3));

console.log("");
var a1 = 3>2;
console.log("var a1 = 3>2 -->",a1);
console.log("");
console.log("");

// .length --> stringin uzunluğunu verir
// .includes('_') --> stringin birşeyi içerip içermediğini verir

var password = "password"
console.log('var password = "password"');
console.log('password.length > 5 && password.includes("ss") --> ',password.length > 5 && password.includes("ss"));

console.log("");
console.log("");

//NULLISH OPERATOR --> ??

// Sol taraf false null yada undefined ise sağ tarafı döndürür aksi halde sol tarafı veriyor

var d1 = null;
console.log("var d1 = null , d1 ?? 1 :  ",d1 ?? 1);