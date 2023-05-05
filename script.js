// starting game
document.addEventListener('DOMContentLoaded', function(){
    // selecting no. of the words from the table in order
    let findNumber = document.querySelectorAll("#ent-der td:nth-child(1)");
    let numberList = [];    
    for (let i = 0; i < findNumber.length; i++ ){            
        let number = findNumber[i].textContent;
        numberList.push(number);
        }
    // selecting words from the table in order with their no.
        let wordList = [];
    if (number === [i] + 1){
        let findWord = document.querySelectorAll("#ent-der td:nth-child(3)");        
        for (let j = 0; j < findWord.length; j++){
            let newWord = findWord[j].textContent;       
            wordList.push(newWord);
            }
        // displaying the selected word in the page
            let answer = document.getElementById('answer');
        answer.textContent = newWord[j];
    } 
    runGame();   
})


function runGame(){   
    let findArticle = document.querySelectorAll("#ent-der td:nth-child(2)");
    let articleList = [];    
    for (let i = 0; i < findArticle.length; i++ ){            
        let article = findArticle[i].textContent;
        articleList.push(article);
        } 
    
        let buttoms = document.getElementsByTagName ('button');
    for (button of buttoms){
        addEventListener('click', runGame());
    }
    if ()
    let derButton = document.getElementById('der');
    let dieButton = document.getElementById('die');
    let dasButton = document.getElementById('das');

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

