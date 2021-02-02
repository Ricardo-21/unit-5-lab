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

let currentP = 1;

function placeXO(event){
    console.log(event.target)
    if(currentP === 1){
        event.target.innerText = 'X'
        currentP = 2;
    }
    else{
        event.target.innerText = 'O'
        currentP = 1;
    }
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