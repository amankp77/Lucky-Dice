'use strict';

const scoreEl = {
        0 :  document.querySelector('#score--0'),
        1 : document.querySelector('#score--1')
}

const currentScoreEl = {
        0 : document.querySelector('#current--0'),
        1 : document.querySelector('#current--1')
}

const rollBut = document.querySelector('.btn--roll')
const newGameBut = document.querySelector('.btn--new')
const holdBut = document.querySelector('.btn--hold')

const diceImg = document.querySelector('.dice')

const playerActive = document.querySelectorAll('.player')

//Starting the game hehe :P
scoreEl[0].textContent = "0"
scoreEl[1].textContent = "0"
diceImg.classList.add('hidden')
let currPlayer = 0;
let diceValue;
let currentScore = 0;

const score = [0,0]

const diceFaces = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png" , "dice-6.png"]


rollBut.addEventListener('click',()=>{
    diceImg.classList.remove('hidden');
    diceValue = Math.floor(Math.random()*diceFaces.length)+1;
    diceImg.src = diceFaces[diceValue-1];
    
    if(diceValue==1){
        score[currPlayer] -= currentScore;
        currentScore =0;
        currentScoreEl[currPlayer].textContent = 0;
        playerCSS();
        
    }
    else{
        currentScore +=diceValue;
        currentScoreEl[currPlayer].textContent = currentScore;
        score[currPlayer] += diceValue;
    }
})


holdBut.addEventListener('click',()=>{
    checkWinner()
    scoreEl[currPlayer].textContent = score[currPlayer]
    currentScore =0;
    currentScoreEl[currPlayer].textContent = 0;
    playerCSS();

})


newGameBut.addEventListener('click',playAgain)

function playerCSS(){
    playerActive[currPlayer].classList.remove('player--active')
    playerActive[currPlayer==0?1:0].classList.add('player--active')
    currPlayer = currPlayer==0?1:0;

}

function checkWinner(){
    
    if(score[currPlayer]>=100){ 
        playerActive[currPlayer].classList.add('player--winner')
        scoreEl[currPlayer].textContent = score[currPlayer]
        rollBut.disabled = true
        holdBut.disabled = true
        diceImg.classList.add('hidden');
    }
}

function playAgain(){
    scoreEl[0].textContent = "0"
    scoreEl[1].textContent = "0"
   diceImg.classList.add('hidden')
   currPlayer = 0;
   diceValue;
   currentScore = 0;
   rollBut.disabled = false
   holdBut.disabled = false
   currentScoreEl[0].textContent = "0"
   currentScoreEl[1].textContent = "0"
   playerActive[0].classList.remove('player--winner')
   playerActive[1].classList.remove('player--winner')
   playerActive[0].classList.add('player--active')
   playerActive[1].classList.remove('player--active')
   score[0] = 0;
   score[1] = 0;
   
}