/*
1- creo la struttura html
2- provo modificandola a mano se funziona
3- creare un ciclo infinito di selezione minislide
4- spostare la classe active
5- collegare slide a minislide
6- inserire titolo e testo su slide img

*/


const minibox = document.getElementsByClassName('minibox')
console.log(minibox)

let contatore = 0
console.log(minibox[contatore])

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')



prev.addEventListener('click', function(){

  minibox[contatore].classList.remove('miniactive');

  contatore = contatore - 1

  if (contatore < 0){
    contatore = minibox.length -1
  }

  minibox[contatore].classList.add('miniactive');

  console.log(contatore)
})


next.addEventListener('click', function(){

  minibox[contatore].classList.remove('miniactive');

  contatore = contatore + 1

  if (contatore > minibox.length -1){
    contatore = 0
  }

  minibox[contatore].classList.add('miniactive');

  console.log(contatore)
})








// const items = [
//   'img/01.jpg',
//   'img/02.jpg',
//   'img/03.jpg',
//   'img/04.jpg',
//   'img/05.jpg'
// ];

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
