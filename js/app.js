'use strict';

let names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'
];

let imgArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg',
  'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg',
  'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg']

let container = document.getElementById('container');
let containerTwo = document.getElementById('containerTwo');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');

let buttonEl = document.getElementById('button');

let indexOne = 0;
let indexTwo = 0;
let indexThree = 0;


let maxClickCount = 25;
let clickCount = 0;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Products(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  Products.allProducts.push(this);
}


Products.allProducts = [];

for (let i = 0; i < names.length; i++) {
  new Products(names[i], `../assets/${imgArr[i]}`);
}

console.log(Products.allProducts);




function render() {

  indexOne = randomNumber(0, Products.allProducts.length - 1);

  firstImg.src = Products.allProducts[indexOne].path;
  firstImg.alt = Products.allProducts[indexOne].name;
  firstImg.title = Products.allProducts[indexOne].name;



  indexTwo = randomNumber(0, Products.allProducts.length - 1);
  if (indexOne !== indexTwo) {

    secondImg.src = Products.allProducts[indexTwo].path;
    secondImg.alt = Products.allProducts[indexTwo].name;
    secondImg.title = Products.allProducts[indexTwo].name;
    Products.allProducts[indexOne].views++;

  }
  else {
    indexTwo = randomNumber(0, Products.allProducts.length - 1);
    secondImg.src = Products.allProducts[indexTwo].path;
    secondImg.alt = Products.allProducts[indexTwo].name;
    secondImg.title = Products.allProducts[indexTwo].name;
    Products.allProducts[indexTwo].views++;
  }

  indexThree = randomNumber(0, Products.allProducts.length - 1);
  if (indexThree !== indexTwo && indexThree !== indexOne) {

    thirdImg.src = Products.allProducts[indexThree].path;
    thirdImg.alt = Products.allProducts[indexThree].name;
    thirdImg.title = Products.allProducts[indexThree].name;
  }
  else {
    indexThree = randomNumber(0, Products.allProducts.length - 1);
    thirdImg.src = Products.allProducts[indexThree].path;
    thirdImg.alt = Products.allProducts[indexThree].name;
    thirdImg.title = Products.allProducts[indexThree].name;
    Products.allProducts[indexThree].views++;
  }

}

render();


container.addEventListener('click', clicker);

function clicker(event) {

  if (event.target.id !== 'container') {



    if (clickCount < maxClickCount) {
      clickCount++;

      if (event.target.id === firstImg.id) {
        Products.allProducts[indexOne].votes++;

      }
      else if (event.target.id === secondImg.id) {
        Products.allProducts[indexTwo].votes++;

      }
      else if (event.target.id === thirdImg.id) {

        Products.allProducts[indexThree].votes++;

      }
      render();
    }
    else {

      container.removeEventListener('click', clicker);
      buttonEl.addEventListener('click', showResult);

    }



  }


}



function renderResult() {
  let unorderedList = document.getElementById('resultList');
  for (let i = 0; i < Products.allProducts.length; i++) {
    let orderedList = document.createElement('li');
    unorderedList.appendChild(orderedList);
    orderedList.textContent = `(${Products.allProducts[i].name}):\(${Products.allProducts[i].votes}) Votes \n (${Products.allProducts[i].views}) Views\n `;
  }
  buttonEl.removeEventListener('click', showResult);
}





function showResult() {

  renderResult();

 }





