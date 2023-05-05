// starting game
document.addEventListener('DOMContentLoaded', function(){
    // getting word from table
    let currentRow= 0;    
    let wordList =[];
    let meaningList = [];
   
    // getting words
    function word(){
    let findWord = document.querySelectorAll("#ent-words td:nth-child(2)");   
    for (i = 0; i < findWord.length; i++){
        let word = findWord[i].textContent; 
        wordList.push(word);       
        } 
        let question = document.getElementById('question');
        question.textContent = wordList[currentRow];   
    }
    // getting words' meaning
    function meaning(){ 
    let findMeaning = document.querySelectorAll("#ent-words td:nth-child(3)");   
        for (i = 0; i <findMeaning.length; i++){
        let meaning = findMeaning[i].textContent;
        meaningList.push(meaning);
        }
        let engMeaning = document.getElementById('eng-meaning');
        engMeaning.textContent = meaningList[currentRow];           
    }    

    function derButton(){
        let articleList = [];
        function article(){
            let findArticle = document.querySelectorAll("#ent-words td:nth-child(1)");        
            for (let i = 0; i < findArticle.length; i++ ){            
                let article = findArticle[i].textContent;
                articleList.push(article);
                } 
            }
        article();
        let article = document.getElementById('article')
        let derButton = document.getElementById('der');
        derButton.addEventListener('click', function() {
            currentRow++;
            if (currentRow >= wordList.length) {
            currentRow = 0;
            }
            let answer = document.getElementById('answer');
            answer.textContent = wordList[currentRow];
            let engMeaning = document.getElementById('eng-meaning');
            engMeaning.textContent = meaningList[currentRow];
            })
    }
    function dieButton(){
        
        let dieButton = document.getElementById('die');
        dieButton.addEventListener('click', function() {
            currentRow++;
            if (currentRow >= wordList.length) {
            currentRow = 0;
            }
            let answer = document.getElementById('answer');
            answer.textContent = wordList[currentRow];
            let engMeaning = document.getElementById('eng-meaning');
            engMeaning.textContent = meaningList[currentRow];
            })
    }
    function dasButton(){
        let dasButton = document.getElementById('das');
        dasButton.addEventListener('click', function() {
            currentRow++;
            if (currentRow >= wordList.length) {
            currentRow = 0;
            }
            let answer = document.getElementById('answer');
            answer.textContent = wordList[currentRow];
            let engMeaning = document.getElementById('eng-meaning');
            engMeaning.textContent = meaningList[currentRow];
            })
    }
    word();
    meaning();
    derButton();
    dieButton();
    dasButton();   
    
})



function continueGame(){   
    word();
    meaning();
    }
        



// 

// function incrementGreen(){
   
// }

// function incrementRed(){

// }

// function practiceRed(){

// }

