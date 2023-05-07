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
    function getArticle(){
        let findArticle = document.querySelectorAll("#ent-words td:nth-child(1)");        
        for (let i = 0; i < findArticle.length; i++ ){            
            let article = findArticle[i].textContent;
            articleList.push(article);
            }        
        }  
        
    function nextPair(){
        currentRow++;
        if (currentRow >= wordList.length){
            currentRow = 0;
        }
        word();
        meaning();
    }
    
    function displayArticle(){
        let articleElement = document.getElementById('article');
        articleElement.textContent = articleList[currentRow];
        setTimeout(function(){
            articleElement.textContent = '';
            nextPair(); }, 2000);                        
        }
        
    
    
    function derButton(){       
        let derButton = document.getElementById('der');
        derButton.addEventListener('click', function(){
            let article = articleList[currentRow];
            displayArticle();            
        }) 
    }
    function dieButton(){
        let dieButton = document.getElementById('die');
        dieButton.addEventListener('click', function(){
            let article = articleList[currentRow];
            displayArticle();            
        })
        
    }
    function dasButton(){
        let dasButton = document.getElementById('das');
        dasButton.addEventListener('click', function(){
            let article = articleList[currentRow];
            displayArticle();            
        })
    }
       
    getArticle();
    word();
    meaning();
    derButton();
    dieButton();
    dasButton();
       
});

