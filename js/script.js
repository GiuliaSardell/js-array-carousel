/*
1- creo la struttura html
2- provo modificandola a mano se funziona
3- creare un ciclo infinito di selezione minislide
4- spostare la classe active
5- collegare slide a minislide
6- inserire titolo e testo su slide img

*/


// immagini laterali*************************************

const minibox = document.getElementsByClassName('minibox')
console.log(minibox)

const box = document.getElementsByClassName('box');
console.log(box)


let contatore = 0
console.log(minibox[contatore])

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')



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

  console.log(contatore)
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

  console.log(contatore)
})



// immagini centrali***********************************

// const images = [
//   'img/01.jpg',
//   'img/02.jpg',
//   'img/03.jpg',
//   'img/04.jpg',
//   'img/05.jpg'
// ];

// console.log(images)
// console.log(images[1])
// console.log(images[images.length-1])


// const slide = document.querySelector('.slide')


// for (i=0; i < images.length; i++){
  
  
//   const box = document.createElement('div');
//   box.className = 'box'

//   if (i === 0){
//     box.classList.add('active');
//   }

//   box.innerHTML= '<img src="${images[i]}" alt="">'

//   slide.append(box)
  
//   console.log(box)
// }





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
