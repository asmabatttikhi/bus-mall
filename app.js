'use strict';
//make object container for img to show three of them


Product.allproduct=[];

function Product(nameproduct,srcurl) {
  this.nameproduct= nameproduct;
  this.srcurl= srcurl;
  this.votes=0;
  this.shown=0;
  Product.allproduct.push(this);
}

let btn=document.getElementById('button');

let leftimage=document.getElementById('left-image');
let middleimage=document.getElementById('middle-image');
let rightimage=document.getElementById('right-image');

let maxAttempts=25;
let userAttemptsCounter=0;



new Product('bag','images/bag.jpg');//0
new Product('banana','images/banana.jpg');//1
new Product('bathroom','images/bathroom.jpg');//2
new Product('boots','images/boots.jpg');//3
new Product('breakfast','images/breakfast.jpg');//4
new Product('bubblegum','images/bubblegum.jpg');//5
new Product('chair','images/chair.jpg');//6
new Product('cthilhu','images/cthulhu.jpg');//7
new Product('dog-duck','images/dog-duck.jpg');//8
new Product('dragon','images/dragon.jpg');//9
new Product('pen','images/pen.jpg');//10
new Product('pet-sweep','images/pet-sweep.jpg');//11
new Product('scissors','images/scissors.jpg');//12
new Product('shark','images/shark.jpg');//13
new Product('sweep','images/sweep.png');//14
new Product('tauntaun','images/tauntaun.jpg');//15
new Product('unicorn','images/unicorn.jpg');//16
new Product('water-can','images/water-can.jpg');//17
new Product('wine-glass','images/wine-glass.jpg');//18

//console.log(Product);

//random form w3
function getRandomIndex() {
  return Math.floor(Math.random() * Product.allproduct.length);
}


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;


function renderThreeProducts() {

  leftImageIndex=getRandomIndex();
  middleImageIndex=getRandomIndex();
  rightImageIndex=getRandomIndex();


  while (leftImageIndex===rightImageIndex||leftImageIndex===middleImageIndex||middleImageIndex===leftImageIndex||middleImageIndex===rightImageIndex) {
    rightImageIndex=getRandomIndex();
    leftImageIndex=getRandomIndex();
    middleImageIndex=getRandomIndex();
  }


  leftimage.src=Product.allproduct[leftImageIndex].srcurl;
  Product.allproduct[leftImageIndex].shown++;


  middleimage.src=Product.allproduct[middleImageIndex].srcurl;
  Product.allproduct[middleImageIndex].shown++;

  rightimage.src=Product.allproduct[rightImageIndex].srcurl;
  Product.allproduct[rightImageIndex].shown++;


}


renderThreeProducts();
// leftimage.addEventListener('click',handleUserClick);
// middleimage.addEventListener('click',handleUserClick);
// rightimage.addEventListener('click',handleUserClick);

let imagesDiv=document.getElementById('images-div');
imagesDiv.addEventListener('click',handleUserClick);

function handleUserClick(event) {

  //console.log(event.target.id);

  if (userAttemptsCounter<maxAttempts) {


    if (event.target.id==='left-image') {

      Product.allproduct[leftImageIndex].votes++;
      //console.log(Product.allproduct[leftImageIndex]);
      console.log(userAttemptsCounter);
      userAttemptsCounter++;
      renderThreeProducts();

    }else if(event.target.id==='middle-image'){
      Product.allproduct[middleImageIndex].votes++;
      renderThreeProducts();
      userAttemptsCounter++;

    }
    else if(event.target.id==='right-image'){
      Product.allproduct[rightImageIndex].votes++;
      renderThreeProducts();
      userAttemptsCounter++;
    }
    else{
      alert('click on the image');
    }


  }else{

    btn.hidden=false;
    btn.addEventListener('click',listmaker);
    imagesDiv.removeEventListener('click',handleUserClick);
  }
}




function listmaker(){
  let list= document.getElementById('result-list');
  for (let i = 0; i < Product.allproduct.length; i++) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent=`${Product.allproduct[i].nameproduct} has ${Product.allproduct [i].votes} votes`;
  }
  btn.removeEventListener('click',listmaker);
}
