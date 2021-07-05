let str1 = "asdf"
let str2 = 'asdf'
let str3 = `asdf`
let str4= new String("asdf")

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);



//length property

let let1 = "123456"
console.log(let1.length);
console.log("".length);
console.log(str4.length);



//concat method

let let2 = "123a"
let let3 = "456b"

console.log(let2.concat(let3));
console.log(let2+let3);


//charAt() method

let let4 = "0123456"
console.log(let4.charAt(0));
console.log(let4.charAt(5));
console.log(let4.charAt(let4.length-1));
console.log(let4[0]);
console.log(let4[let4.length-1]);




console.log('"a\\nb".charAt(0)',"a\nb".charAt(0));
console.log('"a\\nb".charAt(1)',"a\nb".charAt(1));
console.log('"a\\nb".charAt(2)',"a\nb".charAt(2));
console.log('"a\\nb".charAt(3)',"a\nb".charAt(3));


// includes() method

let let5 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let5.includes("Ipsum"));
console.log(let5.includes("ipsum"));
console.log(let5.includes("i"));


// indexOf() method

/* 
*******eğer içerisinde o ifade yoksa -1 döndürür 

*******birden fazla aynı ifade varsa ilkinin indeksini verir 
*/


let let6 = "012315"
console.log(let6.indexOf("3"));
console.log(let6.indexOf("5"));
console.log(let6.indexOf("1"));
console.log(let6.indexOf("a"));



//lastIndexOf() method

//en sonununcunun indexini verir


let let7 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let7.length);
console.log(let7.lastIndexOf("y"));


//replace() method

//sadece ilk gördüğü eşleşmeyi değiştirir


let let8 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let8.replace("L","XXXXXX"));
console.log(let8);




//search() method

// -ilk indexi verir
// -regex ile kullanılabilir


let let9 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let9.search("Dummy"));
console.log(let9.search(/Dummy/i)); //regex ile caseSensitive özelliğini iptal ettik












//slice(   ) method

let let10 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let10.slice(0,5));
console.log(let10.slice(5,7));
console.log(let10.slice(6));
console.log(let10.slice(12,-10));


//split() method

let let11 = "Hello my friends."

console.log(let11.split(" "));
console.log(let11.split("e"));

//substr(start,stepForOneTime) method



let let12 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let12.substr(6,8));
console.log(let12.substr(70,10));






//substring(start,stop)

let let13 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(let13.substring(6,14));



//toUpperCase()-toLocaleUpperCase() method

console.log("AsdF***iğ***".toUpperCase());
console.log("AsdF***iğ***".toLocaleUpperCase('tr-Tr'));


//toLowerCase()-toLocaleLowerCase() method


console.log("AsdF***iğ***".toLowerCase());
console.log("AsdF***iğ***".toLocaleLowerCase('tr-Tr'));


//trim() method


console.log("   a   ");
console.log("   a   ".trim());
console.log("   a   \t".trim());
console.log("   a   \t".trimRight());
console.log("   a   \t".trimStart());
