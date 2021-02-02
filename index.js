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
const row2 = document.getElementById('row2')
const row3 = document.getElementById('row3')
const col1 = document.querySelectorAll(".col1")

const boxes = document.querySelectorAll('.box');

const xcount = document.querySelector('#XW')
const ocount = document.querySelector('#OW')
const dcount = document.querySelector('#Draws')

let currentP = 1;
let col1str = '';
let col2str = '';
let col3str = '';
let d1str = '';
let d2str = '';
let gameOver = false;
let count = 0;

function placeXO(event){
    if(!gameOver){
        if(event.target.innerText === "") { 
            if(currentP === 1){
                if(event.target.parentNode.name == undefined) {
                    event.target.parentNode.name = "X"
                } else{
                event.target.parentNode.name += 'X'
                }
                if(event.target.classList[1] === 'col1'){
                    col1str += 'X';
                }
                if(event.target.classList[1] === 'col2'){
                    col2str += 'X';
                }
                if(event.target.classList[1] === 'col3'){
                    col3str += 'X';
                }
                if(event.target.classList[2] === 'd1' || event.target.classList[3] === 'd1'){
                    d1str += 'X';
                }
                if(event.target.classList[2] === 'd2' || event.target.classList[3] === 'd2'){
                    d2str += 'X';
                }
                event.target.innerText = 'X'
                currentP = 2;
                count += 1; 
            }
            else{
                if(event.target.parentNode.name == undefined) {
                    event.target.parentNode.name = "O"
                } else{
                event.target.parentNode.name += 'O'
                }
                if(event.target.classList[1] === 'col1'){
                    col1str += 'O';
                }
                if(event.target.classList[1] === 'col2'){
                    col2str += 'O';
                }
                if(event.target.classList[1] === 'col3'){
                    col3str += 'O';
                }
                if(event.target.classList[2] === 'd1' || event.target.classList[3] === 'd1'){
                    d1str += 'O';
                }
                if(event.target.classList[2] === 'd2' || event.target.classList[3] === 'd2'){
                    d2str += 'O';
                }
                // col1.forEach(x => col1str += x.innerText)
                event.target.innerText = 'O'
                currentP = 1;
                count += 1;
            }
        }
        // event.target.parentNode.name += 'f'
        // console.log(row1)
        checkwinner(event);
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
 
function checkwinner(x) {
    console.log(col1str)
    if (x.target.parentNode.name === "XXX") {
        // alert('x won')
        console.log('x won');
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    if (x.target.parentNode.name === "OOO") {
        // alert('x won')
        console.log('O won');
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }

    if(col1str === "XXX"){
        console.log('X won');
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    if(col2str === "XXX"){
        console.log('X won');
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    if(col3str === "XXX"){
        console.log('X won');
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    
    if(col1str === "OOO"){
        console.log('O won');
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }
    if(col2str === "OOO"){
        console.log('O won');
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }
    if(col3str === "OOO"){
        console.log('O won');
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }

    if(d1str === 'XXX'){
        console.log('X won')
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    if(d1str === 'OOO'){
        console.log('O won')
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }
    if(d2str === 'XXX'){
        console.log('X won')
        gameOver = true;
        updateDom('x')
        let num = parseInt(xcount.firstElementChild.innerText);
        num += 1;
        xcount.firstElementChild.innerText = `${num}`;
        return 'x'
    }
    if(d2str === 'OOO'){
        console.log('O won')
        gameOver = true;
        updateDom('o')
        let num = parseInt(ocount.firstElementChild.innerText);
        num += 1;
        ocount.firstElementChild.innerText = `${num}`;
        return 'o'
    }
    
    if(count === 9){
        console.log('draw!');
        gameOver = true;
        updateDom('draw')
        let num = parseInt(dcount.firstElementChild.innerText);
        num += 1;
        dcount.firstElementChild.innerText = `${num}`;
        return 'draw';
    }
}

function updateDom(winner){
    if(winner === 'x'){
        boxes.forEach(el => el.style.fontSize = '50px')
        topL.innerText = "X Wins"
        topM.innerText = "X Wins"
        topR.innerText = "X Wins"

        midL.innerText = "X Wins"
        midM.innerText = "X Wins"
        midR.innerText = "X Wins"
    
        bottomL.innerText = "X Wins"
        bottomM.innerText = "X Wins"
        bottomR.innerText = "X Wins"
    }
    else if(winner === 'o'){
        boxes.forEach(el => el.style.fontSize = '50px')
        topL.innerText = "O Wins"
        topM.innerText = "O Wins"
        topR.innerText = "O Wins"

        midL.innerText = "O Wins"
        midM.innerText = "O Wins"
        midR.innerText = "O Wins"
    
        bottomL.innerText = "O Wins"
        bottomM.innerText = "O Wins"
        bottomR.innerText = "O Wins"
    }
    else if(winner === 'draw'){
        boxes.forEach(el => el.style.fontSize = '50px');
        topL.innerText = "DRAW"
        topM.innerText = "DRAW"
        topR.innerText = "DRAW"

        midL.innerText = "DRAW"
        midM.innerText = "DRAW"
        midR.innerText = "DRAW"
    
        bottomL.innerText = "DRAW"
        bottomM.innerText = "DRAW"
        bottomR.innerText = "DRAW"
    }

}

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    topL.innerText = ''
    topM.innerText = ''
    topR.innerText = ''
    midL.innerText = ''
    midM.innerText = ''
    midR.innerText = ''
    bottomL.innerText = ''
    bottomM.innerText = ''
    bottomR.innerText = ''
    col1str = '';
    col2str = '';
    col3str = '';
    d1str = '';
    d2str = '';
    gameOver = false;
    count = 0;
    currentP = 1;
    boxes.forEach(el => el.style.fontSize = '200px');

    row1.name = undefined
    row2.name = undefined
    row3.name = undefined
})

