document.addEventListener('DOMContentLoaded', function(){
    let findNumber = document.querySelector("#ent-der td:nth-child(1)");
    let number = findNumber.textContent;
    if (number === 1){
        let newWord = document.querySelector("#ent-der td:nth-child(3)");
        let newWordText = newWord.textContent;
        let answer = document.getElementById('answer');
        answer.textContent = newWordText;
    }
     
    

})


function runGame(){

}

function getAnswer(){

}

function checkAnswer(){

}

function answerFeedback(){

}

function incrementGreen(){

}

function incrementRed(){

}

function practiceRed(){

}

