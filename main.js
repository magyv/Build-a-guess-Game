const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
checkButton = document.querySelector("button"),
remainChances = document.querySelector(".chances");

//set the focus on input field
input.focus();



let randomNum = Math.floor(Math.random()*100);


chance = 10;

// listen for the click event on the check button
checkButton.addEventListener("click",() =>{
    chance--;
    let inputValue = input.value;
    //check if the input value is equal to the random number
    if(inputValue == randomNum){
        [guess.textContent , input.disabled] = ["congratulations" , true];
        [checkButton.textContent, guess.style.color] = ["Replay" , "#333"];
        //check if input value is > random number and within 1-99 range
    }    
    if(inputValue > randomNum &&  inputValue < 100){
        //update the guess text and remaining chances
        [guess.textContent, remainChances.textContent] = ["your guess is high" , chance];
        guess.style.color = "#333";
        // check if input value is < random number and within 1-99 range
    }else if(inputValue < randomNum &&  inputValue > 0){
        //update the guessed number text and remaining chances
        [guess.textContent, remainChances.textContent] = ["your guess is low" , chance];
        guess.style.color = "#333";
    }else{
        //update the guessed number text ,color  and remaining chances
        [guess.textContent, remainChances.textContent] = ["your number is invalid " , chance];
        guess.style.color = "#DE0611";
    }
    // check if the chance is zero
    if(chance == 0){
        [checkButton.textContent,input.disabled,inputValue] = ["Replay",true, ""];
        [guess.textContent , guess.style.color] = ["you lost the game" , "#DE0611"];
    }
    if(chance < 0){
        location.reload();
    }
});










































