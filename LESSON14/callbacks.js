// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// // 1
// // You deposited $xx
// // You withdrew $xxx 

// //  arrDeposits =
// //  arrWithdraws =
// // for each
// //
// function result(array) {

//     const arrDeposits = [];
//     const arrWithdraw = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (element < 0) {
//             arrWithdraw.push(element);
//         }else {
//             arrDeposits.unshift(element);
//         }
        
//     }

//     console.log(arrDeposits);
//     console.log(arrWithdraw);
// }


// result(movements)









// /******** */

// // map initials
// const str = 'Clarusway Online Career IT Training School';

const givenStr0 = 'Clarusway Online Career IT Training School';
console.log(givenStr0.split(" ").map(x => x[0]).join(""));






// /***** */
// // map

// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'


const givenStr = 'The Quick Brown Fox';
console.log(givenStr.split("").map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join(""));












// // filter words longer than 6 letters
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'Clarusway',
  'Future',
];
console.log(words.filter(x => x.length > 6));















//*************************************** */
const strx = 'The Quick Brown Fox'; 
function lowerUpper(x){
    let str = x.split("");
    let xxx = [];
    console.log(str);
    for(i=0 ; i < str.length;i++){
        
        if(str[i] === str[i].toUpperCase()){
            xxx.push(str[i].toLowerCase());
        }
        else{
            xxx.push(str[i].toUpperCase())
        }
    }
    return xxx
}
console.log(lowerUpper(strx).join(""))

//kısa çözüm:
// var newstr = str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
// console.log(newstr)
// console.log(str)



// ********************************




const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
function result(array){
    const plus = [];
    const minus = [];
    let sumPlus = 0;
    let sumMinus = 0;
    for(i =0 ; i < array.length ; i++){
        if(array[i] < 0){
            minus.push(array[i])
        }
        else{
            plus.push(array[i])
        }
    }
//    console.log(plus.forEach((a,b) => {
//     a + b
//     })
    for(i=0;i< plus.length;i++){
        sumPlus += plus[i]
    }
    for(i=0;i< minus.length;i++){
        sumMinus += minus[i]
    }
    return [`bize yatan para ${sumPlus} ve bizden çıkan para ${sumMinus} `]
}
console.log(result(movements))





const str = 'Clarusway Online Career IT Training School';
const splittedSentece = str.split(" ")
 const res = splittedSentece.map(e => e[0].toUpperCase())
 const newStr = res.join("")
console.log(newStr)


// Kısa çözüm
// str.split(" ").map(n => n[0]).join("")


// **********************************************
// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// let deposit = 0;
// let witdrow = 0;
// let arrDeposited =[];
// let arrWithdraws =[];
// const toplam = movements.forEach(element => {
    
//     if (element > 0) {
//         deposit += element;
//         arrDeposited.push(element);

//     }
//     else {
//         witdrow += element
//         arrWithdraws.push(element);
//     }
    
// });
// console.log(deposit,witdrow);
// console.log(arrDeposited, arrWithdraws)

// // map initials
// // const str = 'Clarusway Online Career IT Training School';

// // const myArr = str.split(" ");
// // console.log(myArr)

// // let sumStr ="";
// // myArr.map((item)=>{
// //   sumStr += item[0]
    
// // })
// // console.log(sumStr);


// let newStr ="";
// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 

// for (let i = 0; i < str.length; i++) {
//     if ( str[i].toUpperCase() === str[i] ) {
        
//        newStr += str[i].toLowerCase();
        
//     }
//     else if ( str[i].toLowerCase() === str[i]) {
//        newStr += str[i].toUpperCase();
//     }
    
// }
// console.log(newStr);

const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 5,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];
  // 1
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    sum += element.price;
  }
  console.log(sum);
  // 2
  sum = 0;
  for (const el of cart) {
    sum += el.price;
  }
  console.log(sum);
  // 3
  sum = 0;
  cart.forEach((element) => {
    sum += element.price;
  });
  // 4
  const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
  console.log("result :>> ", result);
  
  // 5
  const re = cart.reduce((sum, curItem) => {
    return sum + curItem.price;
  }, 0);
  console.log("re :>> ", re);
  
  const vat = cart.reduce((sum, curItem) => {
    return sum + (curItem.price * curItem.vat) / 100;
  }, {});
  console.log("vat :>> ", vat);



  /*
--------------
for in example
--------------
*/
const parent = {
    firstName: "Mike",
    lastName: "Doe",
    profession: "Barber",
  };
  
  function Baby() {
    this.firstName = "unnamed";
    this.weight = 3.4;
  }
  
  Baby.prototype = parent;
  
  var sally = new Baby();
  sally.firstName = "Sally";
  
  for (const prop in sally) {
    const element = sally[prop];
    console.log(prop, ":>>", element);
    if (Object.hasOwnProperty.call(sally, prop)) {
    }
  }