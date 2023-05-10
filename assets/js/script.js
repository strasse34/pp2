// starting game
document.addEventListener('DOMContentLoaded', function(){
    word();
    meaning();
    getArticle();
    clickButton();
    
     
});  

// getting word, meaning and article from table
let currentRow= 0;
let objectIndex = 0; 
let articleIndex = 0; 
let articleList = [];    
let wordList =[];
let meaningList = []; 
let missedWordsArray = [];
let missedArticleArray = [];


// getting words
function word(){
    let findWord = document.querySelectorAll("#ent-words td:nth-child(2)");   
    for (i = 0; i < findWord.length; i++){
    let word = findWord[i].textContent; 
    wordList.push(word);       
    } 
    let question = document.getElementById('question');
    question.textContent = wordList[currentRow];
    let totalWord = document.getElementById('t-words');
    totalWord.innerText = findWord.length;
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

    
// calculation for score space 
function incrementGreen(){
    let greenBox = parseInt(document.getElementById('t-learned').textContent);
    document.getElementById('t-learned').innerText = ++greenBox;
}

function incrementRed(){
    let redBox = parseInt(document.getElementById('t-missed').textContent);
    document.getElementById('t-missed').innerText = ++redBox;
    
}

function remainCal(){
    let a = document.getElementById('t-learned').innerText;
    let b = document.getElementById('t-missed').innerText;
    let c = document.getElementById('t-words').innerText;

    let remainWords = document.getElementById('t-remain');
    remainWords.innerText = (parseInt(c) - (parseInt(a) + parseInt(b)));

    let finalRemain = parseInt(document.getElementById('t-remain').innerText);
    if(finalRemain <= 0){
        alert('There is no new words to practice. Please check Missed Words Practice to practice missed words!');               
    }
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
    
    let article = document.getElementById('article').innerText;
    missedArticleArray.push(article);
    console.log(missedArticleArray);
    
    setTimeout(function(){
        articleElement.textContent = '';
        articleElement.style.backgroundColor = '';
        question.style.backgroundColor = '';            
        nextPair(); }, 2000);
        remainCal();                                               
    }

// listen to derButton and check the answer with 'der' article and giving feedback to the user.
function clickButton(buttonId){     
    let articleElement = document.getElementById('article');
    let currentArticle = articleList[currentRow];    
        if (currentArticle === buttonId){
        articleElement.style.backgroundColor = 'green';
        incrementGreen();                                                                                                            
        } else { articleElement.style.backgroundColor = 'red';
        incrementRed();
        makeMissedWordsArray();
        console.log(missedArticleArray)               
        }                        
        displayArticle();     
}

// directing user to practice missed words by clikcing on proper button
function goToMissedWords(){       
    let button = document.getElementById('practice-missed');
    isRed = true;
    button.addEventListener('click' , function(){
        let totalMissed = parseInt(document.getElementById('t-missed').innerText);        
        if (totalMissed !== 0){            
            if(isRed){        
                button.style.backgroundColor = 'red';
                practiceMissedWords()          
            } else {
                button.style.backgroundColor = 'aliceblue';
                return;                                          
            }
            isRed = !isRed;
        } else {
            alert("You Have No Missed Words!");
        }   
    });
} 
    

goToMissedWords()
   
// collecting the words and meaning which their article has been missed by user.  
function makeMissedWordsArray(){
    
    let word = document.getElementById('question').innerText;
    let meaning = document.getElementById('eng-meaning').innerText;

    missedWordsArray.push({        
        word: word,
        meaning: meaning,
    });   

    console.log(missedWordsArray);    
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// PRACTICING MISSED WORKDS

function practiceMissedWords(){
    articleElement = document.getElementById('article');
    questionElement = document.getElementById('question');
    meaning = document.getElementById('eng-meaning');

    meaning.textContent = '';
    articleElement.textContent = '';
    articleElement.style.backgroundColor = '';
    question.style.backgroundColor = '';    

    displayMissedWord();       
    derButton();    
    dieButton();    
    dasButton();    
}

// score space calculation
function greenRedCal(){
    let greenBox = parseInt(document.getElementById('t-learned').innerText);
    greenBox = ++greenBox;
    let redBox = parseInt(document.getElementById('t-missed').innerText);
    redBox = --redBox;
}          

// showing next 'word' and 'meaning' after previous 'word' and 'meaning' checked. 
function nextMissedPair(){
    objectIndex++;
    if (objectIndex >= objectIndex.length){
        objectIndex = 0;
    }
    displayMissedWord();        
}  

// displaying correct article after receiving response from user.
function displayMissedArticle(){           
    let missedArticle = missedArticleArray[articleIndex];
    let articleElement = document.getElementById('article');            
    articleElement.innerText = missedArticle;  
    setTimeout(function(){
        articleElement.textContent = '';
        articleElement.style.backgroundColor = '';
        question.style.backgroundColor = '';            
        nextMissedPair(); }, 2000);                                               
    } 

// defining button der, die and das in missed words 
function derButton(missedArticleArray){           
    let derButton = document.getElementById('der');                            
    derButton.addEventListener('click', function(){
        let missedArticle = missedArticleArray[articleIndex];            
        if (missedArticle === 'der'){
        articleElement.style.backgroundColor = 'green';
        greenRedCal()          
        } else {
        displayMissedArticle();
        }                                                                         
    });    
}

function dieButton(missedArticleArray){           
    let dieButton = document.getElementById('die');                            
    dieButton.addEventListener('click', function(){
        let missedArticle = missedArticleArray[articleIndex];            
        if (missedArticle === 'die'){
        articleElement.style.backgroundColor = 'green';
        greenRedCal()          
        } else {
        displayMissedArticle();
        }                                                                         
    });    
}
function dasButton(missedArticleArray){           
    let dasButton = document.getElementById('das');                            
    dasButton.addEventListener('click', function(){
        let missedArticle = missedArticleArray[articleIndex];            
        if (missedArticle === 'das'){
        articleElement.style.backgroundColor = 'green';
        greenRedCal()          
        } else {
        displayMissedArticle();
        }                                                                         
    });    
}

// Function to display the missed word at the current index
function displayMissedWord() {        
if (objectIndex < missedWordsArray.length) {        
    let missedWord = missedWordsArray[objectIndex];
    let questionElement = document.getElementById('question');
    let engMeaningElement = document.getElementById('eng-meaning');            
    questionElement.innerText = missedWord.word;
    engMeaningElement.innerText = missedWord.meaning;
    } else {            
    alert('Good Job! There is now missed words left');
    location.reload();
    }
}
