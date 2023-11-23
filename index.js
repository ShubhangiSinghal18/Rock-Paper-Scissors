let computerImg = document.getElementById('ComputerImg')
let userImg = document.getElementById('userSelectedImg')
let userChoices = document.getElementsByClassName('userChoice')
let resultText = document.getElementById('resultText')
let userSelected
let result
//console.log(userChoices);

const choices = ['Rock' , 'Paper' , 'Scissors']


let computerRandomChoice =Math.floor(Math.random()*3 ) 
//console.log(computerChoice);

let computerChoice = choices[computerRandomChoice]
console.log(`computerChoice : ${computerChoice}`)
//console.log(computerImg);



for(let i =0 ; i<userChoices.length ; i++){
    userChoices[i].addEventListener('click' , function(e){
            
        //User choosing and changing image        
        if(e.target.id === "Rock"){
            userSelected = "Rock"
            userImg.src=`Assets/User Symbols/${userSelected}.png`
            }
        else if(e.target.id === "Paper"){
             userSelected = "Paper"
             userImg.src=`Assets/User Symbols/${userSelected}.png`
            }   
        else {
            userSelected = "Scissors"
            userImg.src=`Assets/User Symbols/${userSelected}.png`
            }    
            console.log(`user Choice : ${userSelected}`);
            
            //Changing image of computer choice
            if(computerChoice == 'Rock'){
                computerImg.src= `Assets/Computer Symbols/Inverted ${computerChoice}.png`
            }
            else if(computerChoice == 'Paper'){
                computerImg.src= `Assets/Computer Symbols/Inverted ${computerChoice}.png`
            }
            else{
                computerImg.src= `Assets/Computer Symbols/Inverted ${computerChoice}.png`
            }  

            //calculating result
            if(computerChoice=== userSelected) result = "It's a Tie!!"
            else if(computerChoice==="Rock"){
                if(userSelected==="Paper") result = "Yaay !! You Won :D"
                else if(userSelected==="Scissors") result ="Better Luck Next Time :)"
            }
            else if(computerChoice==="Paper"){
                if(userSelected==="Scissors") result = "Yaay !! You Won :D"
                else if(userSelected==="Rock") result ="Better Luck Next Time :)"
            }
            else if(computerChoice==="Scissors"){
                if(userSelected==="Rock") result = "Yaay !! You Won :D"
                else if(userSelected==="Paper") result ="Better Luck Next Time :)"
            }

            console.log(`Result = ${result}`);
            resultText.innerHTML = result
            
        } , false)
}

