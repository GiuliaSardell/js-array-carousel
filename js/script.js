/*
1- creo la struttura html
2- provo modificandola a mano se funziona
3- creare un ciclo infinito di selezione minislide
4- spostare la classe active
5- collegare slide a minislide
6- inserire titolo e testo su slide img

*/

const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const minibox = document.getElementsByClassName('minibox')
console.log(minibox)

const box = document.getElementsByClassName('box');
console.log(box)


let contatore = 0
console.log(minibox[contatore])

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')




const slide = document.querySelector('.slide');
const minislide = document.querySelector('.minislide');


for(let i = 0; i < images.length ; i++){

  console.log(images[i]);
  
  const box = document.createElement('div');
  const minibox = document.createElement('div');
  console.log(box)
  console.log(minibox)

  box.className = 'box';
  minibox.className = 'minibox';

  box.innerHTML = `<img src="${images[i]}" alt="">`;
  minibox.innerHTML = `<img src="${images[i]}" alt="">`;

  console.log(box);

  slide.append(box); 
  
  minislide.append(minibox);
  
  if(i === contatore){
    box.classList.add('active');
    minibox.classList.add('miniactive');
  }

}


// for (i=0; i< images.length; i++){

//   const testo = document.createElement('div');

//   testo.className = 'testo'

//   testo.innerHTML= `<h2> ${title[i]} </h2> <tr> 
//   <p> ${text[i]} </p>`

//   box[i].append(testo)

// }



prev.addEventListener('click', function(){


  minibox[contatore].classList.remove('miniactive');
  box[contatore].classList.remove('active')

  contatore = contatore - 1

  if (contatore < 0){
    contatore = minibox.length -1
    contatore = box.length -1
  }

  minibox[contatore].classList.add('miniactive');
  box[contatore].classList.add('active');

})

next.addEventListener('click', function(){

  minibox[contatore].classList.remove('miniactive');
  box[contatore].classList.remove('active');

  contatore = contatore + 1

  if (contatore > minibox.length -1){
    contatore = 0
  }

  minibox[contatore].classList.add('miniactive');
  box[contatore].classList.add('active')

})


for (i=0; i< title.length; i++){

  const testo = document.createElement('div');

  testo.className = 'testo'

  testo.innerHTML= `<h2> ${title[i]} </h2> <tr> 
  <p> ${text[i]} </p>`

  box[i].append(testo)

}
