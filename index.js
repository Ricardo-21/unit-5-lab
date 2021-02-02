const gameBox = document.getElementById('gameBox');

const topL = document.getElementById('topL');
const topM = document.getElementById('topM');
const topR = document.getElementById('topR');

const midL = document.getElementById('midL');
const midM = document.getElementById('midM');
const midR = document.getElementById('midR');

const bottomL = document.getElementById('bottomL');
const bottomM = document.getElementById('bottomM');
const bottomR = document.getElementById('bottomR');
const row1 = document.getElementById('row1')
const col1 = document.querySelectorAll(".col1")
let currentP = 1;

let col1str = ''
function placeXO(event){
  if(event.target.innerText === "") { 
    if(currentP === 1){
        if(event.target.parentNode.name == undefined) {
            event.target.parentNode.name = "X"
        } else{
        event.target.parentNode.name += 'X'
        }
        col1.forEach(x => col1str += x.innerText)
        event.target.innerText = 'X'
        currentP = 2;
        
    }
    else{
        if(event.target.parentNode.name == undefined) {
            event.target.parentNode.name = "O"
        } else{
        event.target.parentNode.name += 'O'
        }
        col1.forEach(x => col1str += x.innerText)
        event.target.innerText = 'O'
        currentP = 1;
    }
}
// event.target.parentNode.name += 'f'
// console.log(event.target.parentNode.name)
// console.log(row1)
checkwinner(event)
}

topL.addEventListener('click', placeXO);
topM.addEventListener('click', placeXO);
topR.addEventListener('click', placeXO);

midL.addEventListener('click', placeXO);
midM.addEventListener('click', placeXO);
midR.addEventListener('click', placeXO);

bottomL.addEventListener('click', placeXO);
bottomM.addEventListener('click', placeXO);
bottomR.addEventListener('click', placeXO);
 
function checkwinner(x) {
    console.log(col1str)
    if (x.target.parentNode.name === "XXX") {
        alert('x won')
    } 
}
