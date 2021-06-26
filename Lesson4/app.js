//CONDITIONALS
console.log("******************CONDITIONALS*******************");
console.log("");
console.log("");
console.log("*********************************if-if/else-if/else if/else*********************************");
console.log("");


console.log('let score = 50; \nif (score >= 50) {\n    console.log("Congrats...")\; \n} \n\n---->Result:');

let score = 50;
if (score >= 50) {
    console.log("Congrats...");
}
console.log("");
console.log('if (score >= 50) console.log("Congrats...")\;\n\n---->Result:');
if (score >= 50) console.log("Congrats...");
console.log("");

console.log('if (score >= 70) {\n    console.log("Congrats...")\;\n} else {\n   console.log("Try again...")\;\n} \n\n--->Result:');

if (score >= 70) {
    console.log("Congrats...");
} else {
    console.log("Try again...");
}
console.log("");

//ternary conditionals

console.log("***************Ternary conditionals***************\n\n");


console.log('score >= 50 ? console.log("Congrats...") : console.log("Try again...")\;\n\n--->Result:');

score >= 50 ? console.log("Congrats...") : console.log("Try again...");

console.log("");
console.log('score >= 80 ? console.log("Congrats...") : score >30 ? console.log("try harder") : console.log("try again")\;\n\n--->Result:');
score >= 80 ? console.log("Congrats...") : score >30 ? console.log("try harder") : console.log("try again");


if (false) {
    //will not be executed
} else if (true) {
    //will be executed
} else {
    //will not be executed
}

console.log("");
console.log("");
console.log
//SWITCH-CASE
("********************************switch-case********************************");
console.log("");

console.log('var chosen = "3"\;\nswitch (chosen) {\n    case "1":\n        console.log(chosen,"is chosed")\;\n        break\;\n    case "2":\n        console.log(chosen,"is chosed")\;\n        break\;\n    case "3":\n        console.log(chosen,"is chosed")\;\n        break\;\n    default:\n        console.log("default result")\;\n        break\;\n}\n\n--->Result:');


var chosen = "3";

switch (chosen) {
    case "1":
        console.log(chosen,"is chosed");
        break;
    case "2":
        console.log(chosen,"is chosed");
        break;
    case "3":
        console.log(chosen,"is chosed");
        break;
    default:
        console.log("default result");
        break;
}

console.log("\n\n\n");

//.toLowerCase() string ifadeyi küçük harfe dönüştürür

console.log(`var text\;\nvar fruits = 'APple'\; // ===\n\nswitch (fruits.toLowerCase()){\n    case "banana":\n        text = "Banana is good";\n        break;\n    case "lemon":\n    case "orange":\n        text = "I am not a fan of orange or lemon.";\n        break;\n    case "apple":\n        text = "How you like them apples?";\n        break;\n    default:\n        text = "I have never heard of that fruit...";\n}\nconsole.log(text);\n\n--->Result:`);

var text;
var fruits = 'APple'; // ===

switch (fruits.toLowerCase()){
    case "banana":
        text = "Banana is good";
        break;
    case "lemon":
    case "orange":
        text = "I am not a fan of orange or lemon.";
        break;
    case "apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}
console.log(text);




console.log("\n\n\n\n\n");






var day = prompt("Bugün günlerden ne?")
switch (day.toLowerCase()) {

    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        console.log("In-class");
        break;


    case "salı":
    case "cuma":
        console.log("Teamwork/workshop");
        break;


    case "pazar":
        console.log("Tatil");
        break;


    default:
        console.log("GÜN GİR DEDİK SANA ...");
        break;
}
