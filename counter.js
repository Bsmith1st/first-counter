// let para = document.querySelector('h1')
// console.log(para);
// // para.innerText ='BADMUS'

// const rest = document.querySelector('.res')
// const heading = document.querySelector('h1')
// function changeText() {
//     let newCounter = document.querySelector("h1");
//     newCounter.innerText = "1";
//   }
//   rest.addEventListener("click", changeText)

//   let btn = document.querySelector('.inc')
// function colored() {
//     let body = document.body
//     body.style.backgroundColor = 'brown'
    
// }
// btn.addEventListener('click',colored)
let heading = document.querySelector('h1')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')


function DECREASE (){
    heading.innerText--
    let body = document.body
    body.style.backgroundColor = 'rgb(233, 79, 79)'
}
dec.addEventListener('click',DECREASE)

function INCREASE (){
    heading.innerText++
    let body = document.body
    body.style.backgroundColor = 'rgb(139, 254, 139'
    
}
inc.addEventListener('click',INCREASE)

function RESET (){
    heading.innerText= 0 
    let body = document.body
    body.style.backgroundColor = 'rgb(237, 237, 101)'
    
}
res.addEventListener('click',RESET)

