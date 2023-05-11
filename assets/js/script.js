// starting game
document.addEventListener('DOMContentLoaded', function(){
    word();
    meaning();
    getArticle();
    ClicksOnButtonOff()
    derClick();     
    dieClick();     
    dasClick(); 
});  

// getting word, meaning and article from table
let currentRow= 0;
let objectIndex = 0; 
let articleList = [];    
let wordList =[];
let meaningList = []; 
let missedWordsArray = [];


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
    for (i = 0; i < findMeaning.length; i++){
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

// showing next word and meaning after each user feedback
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
    let clickDer = document.getElementById('der');        
    let clickDie = document.getElementById('die');
    let clickDas = document.getElementById('das');   
    let articleElement = document.getElementById('article');
    articleElement.textContent = articleList[currentRow];    
    setTimeout(function(){
        articleElement.textContent = '';
        articleElement.style.backgroundColor = '';
        question.style.backgroundColor = '';        
        clickDer.disabled = false;            
        clickDie.disabled = false;            
        clickDas.disabled = false;            
        nextPair(); }, 2000);
        remainCal();                                 
    }

// disabling event listening of clicks on buttons to prevent unexpected click
function clicksDisabled(){
    let clickDer = document.getElementById('der');        
    let clickDie = document.getElementById('die');
    let clickDas = document.getElementById('das');
    clickDer.disabled = true;
    clickDie.disabled = true;
    clickDas.disabled = true; 
}

// listen to derButton and check the answer with 'der' article and giving feedback to the user.
function derClick(){ 
    let articleElement = document.getElementById('article');        
    let clickDer = document.getElementById('der');    
    clickDer.addEventListener('click', function(){
        clicksDisabled();          
        let currentArticle = articleList[currentRow];        
        if (currentArticle === 'der'){
            articleElement.style.backgroundColor = 'green';
            incrementGreen();
            displayArticle();                                                                                                             
            } else { articleElement.style.backgroundColor = 'red';            
            incrementRed();
            displayArticle();            
            makeMissedWordsArray(); 
            console.log(missedWordsArray);                         
            }       
    });       
}

function dieClick(){     
    let articleElement = document.getElementById('article');        
    let clickDie = document.getElementById('die');
    clickDie.addEventListener('click', function(){
        clicksDisabled();    
        let currentArticle = articleList[currentRow];
        if (currentArticle === 'die'){
            articleElement.style.backgroundColor = 'green';
            incrementGreen();
            displayArticle();                                                                                                            
            } else { articleElement.style.backgroundColor = 'red';            
            incrementRed();
            displayArticle();
            makeMissedWordsArray();
            console.log(missedWordsArray);                           
            }        
    });    
}

function dasClick(){     
    let articleElement = document.getElementById('article');        
    let clickDas = document.getElementById('das');
    clickDas.addEventListener('click', function(){
        clicksDisabled();
        let currentArticle = articleList[currentRow];    
        if (currentArticle === 'das'){
            articleElement.style.backgroundColor = 'green';
            incrementGreen();
            displayArticle();                                                                                                            
            } else { articleElement.style.backgroundColor = 'red';            
            incrementRed();
            displayArticle();
            makeMissedWordsArray();
            console.log(missedWordsArray);                           
            }         
    });    
}

// switching between two sets of buttons during normal practice and missedWordPractice
function clicksOffButtonOn(){
    let clickDer = document.getElementById('der');        
    let clickDie = document.getElementById('die');
    let clickDas = document.getElementById('das');
    clickDer.style.display = 'None';
    clickDie.style.display = 'None';
    clickDas.style.display = 'None';
    let derButton = document.getElementById('mder');        
    let dieButton = document.getElementById('mdie');
    let dasButton = document.getElementById('mdas');
    derButton.style.display = 'inline-flex';
    dieButton.style.display = 'inline-flex';
    dasButton.style.display = 'inline-flex';
}

function ClicksOnButtonOff(){
    let derButton = document.getElementById('mder');        
    let dieButton = document.getElementById('mdie');
    let dasButton = document.getElementById('mdas');
    derButton.style.display = 'None';
    dieButton.style.display = 'None';
    dasButton.style.display = 'None';
    let clickDer = document.getElementById('der');        
    let clickDie = document.getElementById('die');
    let clickDas = document.getElementById('das');
    clickDer.style.display = 'inline-flex';
    clickDie.style.display = 'inline-flex';
    clickDas.style.display = 'inline-flex';
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
                clicksOffButtonOn();
                practiceMissedWords();          
            } else {
                button.style.backgroundColor = 'aliceblue';
                ClicksOnButtonOff()
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
    let article = document.getElementById('article').innerText;
    let word = document.getElementById('question').innerText;
    let meaning = document.getElementById('eng-meaning').innerText;
    missedWordsArray.push({        
        article: article,
        word: word,
        meaning: meaning,
    });     
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


// PRACTICING MISSED WORKDS
function practiceMissedWords(){
    displayMissedWord();              
    derButton();    
    dieButton();    
    dasButton();    
}


// score space calculation
function greenPlus(){
    let greenBox = parseInt(document.getElementById('t-learned').innerText);
    document.getElementById('t-learned').innerText = ++greenBox;
}

function redMinus(){
    let redBox = parseInt(document.getElementById('t-missed').innerText);
    document.getElementById('t-missed').innerText = --redBox;
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
    let derButton = document.getElementById('mder');           
    let dieButton = document.getElementById('mdie');           
    let dasButton = document.getElementById('mdas');           
    let missedArticle = missedWordsArray[objectIndex].article;
    let articleElement = document.getElementById('article');            
    articleElement.innerText = missedArticle;  
    setTimeout(function(){
        articleElement.textContent = '';
        articleElement.style.backgroundColor = '';
        question.style.backgroundColor = '';
        derButton.disabled = false;
        dieButton.disabled = false;
        dasButton.disabled = false;
        nextMissedPair(); }, 2000);                                               
    } 

// disabling event listening of clicks on buttons to prevent unexpected click
function buttonsDisabled(){
    let derButton = document.getElementById('mder');           
    let dieButton = document.getElementById('mdie');           
    let dasButton = document.getElementById('mdas');
    derButton.disabled = true;
    dieButton.disabled = true;
    dasButton.disabled = true;
}

// defining button der, die and das in missed words 
function derButton(){
    let derButton = document.getElementById('mder');
    let articleElement = document.getElementById('article');                            
    derButton.addEventListener('click', function(){
        console.log('gooooooooooooood'); 
        buttonsDisabled();
        let missedArticle = missedWordsArray[objectIndex].article;
        console.log(missedArticle);         
        if (missedArticle === 'Der'){
        articleElement.style.backgroundColor = 'green';
        redMinus();
        greenPlus();
        displayMissedArticle();                                    
        } else {
            articleElement.style.backgroundColor = 'red';
            displayMissedArticle();   
            makeMissedWordsArray(); 
        }
                                                                                 
    });    
}

function dieButton(){ 
    let dieButton = document.getElementById('mdie'); 
    let articleElement = document.getElementById('article');                           
    dieButton.addEventListener('click', function(){
        buttonsDisabled();
        let missedArticle = missedWordsArray[objectIndex].article;            
        if (missedArticle === 'Die'){
        articleElement.style.backgroundColor = 'green';
        redMinus();
        greenPlus(); 
        displayMissedArticle();                       
        } else {
            articleElement.style.backgroundColor = 'red';
            displayMissedArticle();
            makeMissedWordsArray(); 
        }
                                                                                
    });    
}
function dasButton(){
               
    let dasButton = document.getElementById('mdas'); 
    let articleElement = document.getElementById('article');                           
    dasButton.addEventListener('click', function(){
        buttonsDisabled();
        let missedArticle = missedWordsArray[objectIndex].article;           
        if (missedArticle === 'Das'){
        articleElement.style.backgroundColor = 'green';
        redMinus();
        greenPlus(); 
        displayMissedArticle();                       
        } else {
            articleElement.style.backgroundColor = 'red';
            displayMissedArticle(); 
            makeMissedWordsArray(); 
        }
                                                                               
    });    
}

// Function to display the missed word at the current index
function displayMissedWord() {        
if (objectIndex < missedWordsArray.length) {        
    let missedWord = missedWordsArray[objectIndex].word;
    let missedMeaning = missedWordsArray[objectIndex].meaning;
    let questionElement = document.getElementById('question');
    let engMeaningElement = document.getElementById('eng-meaning');            
    questionElement.innerText = missedWord;
    engMeaningElement.innerText = missedMeaning;
    
    } else {            
    alert('Good Job! There is no missed words left');
    ClicksOnButtonOff()   
    location.reload();
    }
}
