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
    
    function updageTotalWord(){
        let totalWord = document.getElementById('t-words');        
        totalWord.textContent = wordList.length;
    }
    // showing next 'word' and 'meaning' after previous 'word' and 'meaning' checked. 
    function nextPair(){
        currentRow++;
        if (currentRow >= wordList.length){
            currentRow = 0;
        }
        word();
        meaning();
    }
    
    // proper article from articleList displayed for 2 seconds and then get back to default and listen to next click.
    function displayArticle(){
        let articleElement = document.getElementById('article');
        articleElement.textContent = articleList[currentRow];
        setTimeout(function(){
            articleElement.textContent = '';
            articleElement.style.backgroundColor = '';
            question.style.backgroundColor = '';
            nextPair(); }, 2000);                        
        }
        
    
    // listen to derButton and check the answer with 'der' article and giving feedback to the user.
    function derButton(){        
        let articleElement = document.getElementById('article');
        let derButton = document.getElementById('der');                            
        derButton.addEventListener('click', function(){                        
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'der'){
                articleElement.style.backgroundColor = 'green';            
            } else { articleElement.style.backgroundColor = 'red';}
            let article = articleList[currentRow];
            displayArticle();            
        }) 
    }

    // listen to dieButton and check the answer with 'der' article and giving feedback to the user.
    function dieButton(){
        let articleElement = document.getElementById('article');
        let dieButton = document.getElementById('die');
        dieButton.addEventListener('click', function(){
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'die'){
            articleElement.style.backgroundColor = 'green';            
            } else { articleElement.style.backgroundColor = 'red';}
            let article = articleList[currentRow];
            displayArticle();            
        })       
    }

    // listen to dasButton and check the answer with 'der' article and giving feedback to the user.
    function dasButton(){
        let articleElement = document.getElementById('article');
        let dasButton = document.getElementById('das');
        dasButton.addEventListener('click', function(){
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'das'){
            articleElement.style.backgroundColor = 'green';            
            } else { articleElement.style.backgroundColor = 'red';}
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
    updageTotalWord();
       
});

