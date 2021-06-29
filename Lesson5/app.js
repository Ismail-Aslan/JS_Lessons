console.log("********************* JS LOOPS ***********************\n\n\n");


console.log('******************** "while" statement *******************\n\n');

console.log("while(condition) {\n\t\t//statement\n}\n\n ");

let i = 0, sum = 0;

while (i < 6) {
    sum += i;
    i++;

    
}

console.log("sum = ", sum);
console.log(`sum = ${sum}\n\n\n`);


console.log('******************** "do-while" statement *******************\n\n');


console.log("statement en az bir defa çalışır");
console.log("do {\n\t\t//statement\n}\n\nwhile(condition)\;\n\n ");



let j = 0, total = 0;

do {
    total += j
    j++;
} while (j<6);

console.log(`total = ${total}`);


console.log('******************** "for" statement *******************\n\n');


console.log(`for (let i = 0; i < 6; i++){\n\n\t\t//statement\n\n}`);


let sum2 = 0;

for (let i = 0; i < 6; i++){

    sum2 += i;

}

console.log(`sum = ${sum2} \n\n\n`);





let brand = "Clarusway";

for (let i = 0; i < brand.length; i++){

    console.log(`${i+1} = ${brand[i]}`);

}

console.log("\n\n\n");

for (let i = 0; i < brand.length; i++){

    console.log(`${i+1} = ${brand[i]}   ${brand.length-i} = ${brand[brand.length-i-1]}`);

}


console.log("\n\n\n");

for (let i = 0, j = brand.length ; i < brand.length; i++,j--){

    console.log(`${i+1} = ${brand[i]}   ${j} = ${brand[j-1]}`);

}


console.log("\n\n\n");



let bests = ["Clarusway", "Google", "Amazon", "IBM"]

for(let i = 0; i < bests.length; i++){

    document.write("<p>",i+1," : ",bests[i],"</p>")

}

console.log("\n\n\n");



console.log('******************** "break  &  continue" statement *******************\n\n');


for (let i = 0; i < 10; i++) {
    
    console.log(i);

    if (i===6) {
        console.log("break");
        break;
    }
    
}

console.log("\n\n\n");


for (let i = 0; i < 10; i++) {
    
    console.log(i);

    if (i===6) {
        console.log("break");
        break;
    }else{
        continue;
    }
    
}


console.log("\n\n\n");

let text = "clarusway", newText = "";

for (let i = text.length; i >0 ; i--) {
   
    newText += text[i-1]
    
}

console.log(newText,"\n\n\n");


for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        document.write(`<p> ${i} x ${j} = ${i*j}</p>`)
        
    }
    document.write("<br>")
}