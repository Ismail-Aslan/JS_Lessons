// JS DOM

// document.getElementById()

const myDom = document.getElementById('dom');
console.log(myDom);


const instructor = document.getElementById('info');
console.log(instructor);

// document.getElementsByClassName()


const withClassName = document.getElementsByClassName("class-info");
console.log(withClassName[0]);

// document.getElementsByTagName()

const cw = document.getElementsByTagName('h3');
console.log(cw);

// document.querySelector('.')

console.log(document.querySelector('.class-info'));
console.log(document.querySelectorAll('.class-info'));
console.log(document.querySelector('#instructor1'));
console.log(document.querySelectorAll('#instructor1'));
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('h1'));
console.log(document.querySelectorAll('h1')[0]);
console.log(document.querySelector('#info2 h3'));


/////////////////////////////////////////////////////////////

//Manipulation

const brands = document.querySelector('#brands');
console.log(brands);

brands.innerHTML += '<li class="brand" style="color:red"> NioyaTech</li>';

const classBrands = document.querySelectorAll('.brand')
console.log(classBrands);
console.log(classBrands[3].innerText);



const copyRight = document.querySelector('#copy-right');
console.log(copyRight);

copyRight.innerText += "  innerText //// &copy;"
copyRight.innerHTML +='<h1>innerHTML</h1>'


const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];


// let orderedList = document.querySelector('body');
// console.log(orderedList);
 
// let listElements = "<ol>";
// lessonList.forEach(element => {
//          listElements += '<li>'+element.name+'</li>'
// });
 

// listElements += '</ol>'
// console.log(listElements);
// orderedList.innerHTML += listElements
// console.log(orderedList);


const addOrderedList = document.querySelector('body');
addOrderedList.innerHTML += '<ul id="lessons"></ul>'
console.log(addOrderedList);


//html e ol eklenmiş halinde bu kodlar
const lessonElm = document.getElementById('lessons');
lessonList.forEach((element) => {
  lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;
});


////////////////////////////////////////////////////////////////////////

//setAttribute getAttribute


const mdn = document.querySelector('#mdn');

const mdnHrefAttr = mdn.getAttribute('href')
console.log(mdnHrefAttr);

mdn.setAttribute('href','https://www.w3schools.com/');
mdn.innerText = "w3schools";