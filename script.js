// starting game
document.addEventListener('DOMContentLoaded', function(){
    // getting word from table
    let currentRow= 0;
    let articleList = [];    
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
    // getting article
    function article(){
        let findArticle = document.querySelectorAll("#ent-words td:nth-child(1)");        
        for (let i = 0; i < findArticle.length; i++ ){            
            let article = findArticle[i].textContent;
            articleList.push(article);
            }        
        }   

    function derButton(){       
        let derButton = document.getElementById('der');
        derButton.addEventListener('click', function(){
            let article = document.getElementById('article');
            displayArticle(article);
        }) 
    }
    function dieButton(){
        let dieButton = document.getElementById('der');
        dieButton.addEventListener('click', function(){
            let article = document.getElementById('article');
            displayArticle(article);
        })
        
    }
    function dasButton(){
        let dasButton = document.getElementById('der');
        dasButton.addEventListener('click', function(){
            let article = document.getElementById('article');
            displayArticle(article);
        })
    }

    function displayArticle(){
        let articleElement = document.addEventListener('article');
        article.textContent = article;
        setTimeout(function(){
            nextPair(); }, 2000);
        }

    function nextPair(){
        currentRow++;
        if (currentRow >= wordList.length){
            currentRow = 0;
        }
        word();
        meaning();
    }
    
    article();
    word();
    meaning();
    derButton();
    dieButton();
    dasButton();   
    
});



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

