const computerChoiceDisplay = document.getElementById("computer-choice")
const userchoiceDisplay= document.getElementById("user-choice")
const resultDisplay= document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")
let userchoice
let computerchoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {

    userchoice= e.target.id

    userchoiceDisplay.innerHTML= userchoice

    randomComputerDisplay()

    getResult()


}))


function randomComputerDisplay(){

    const randomNumber= Math.floor( Math.random() * 3) + 1

    if(randomNumber === 1){
        computerchoice="rock"
    }
    else if(randomNumber=== 2){
        computerchoice='paper'
    }
    else{
        computerchoice='scissors'
    }

    computerChoiceDisplay.innerHTML=computerchoice
   

}


function getResult(){

   let bool1=computerchoice=== 'rock' && userchoice==='scissors'

   let bool2=computerchoice==='scissors' && userchoice==='paper'

   let bool3=computerchoice==='paper' && userchoice==='rock'

  if( userchoice === computerchoice){

     result="Draw !"
  }
  else if(bool1 || bool2 || bool3){

    result="Loose :("
  }
  else{

    result="Win :) "
  }

  resultDisplay.innerHTML=result


}