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
    
    // score space calculation
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
        setTimeout(function(){
            articleElement.textContent = '';
            articleElement.style.backgroundColor = '';
            question.style.backgroundColor = '';            
            nextPair(); }, 2000);
            remainCal();                                               
        }
    
    // listen to derButton and check the answer with 'der' article and giving feedback to the user.
    function derButton(){     
        let articleElement = document.getElementById('article');
        let derButton = document.getElementById('der');                            
        derButton.addEventListener('click', function(){                        
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'der'){
                articleElement.style.backgroundColor = 'green';
                incrementGreen();                                                                                                            
                } else { articleElement.style.backgroundColor = 'red';
                incrementRed();
                makeMissedWordsArray();    
            }                        
            displayArticle();                                                               
        });
    }
    

    // listen to dieButton and check the answer with 'der' article and giving feedback to the user.
    function dieButton(){
        let articleElement = document.getElementById('article');
        let dieButton = document.getElementById('die');
        dieButton.addEventListener('click', function(){
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'die'){
                articleElement.style.backgroundColor = 'green';
                incrementGreen();          
                } else { articleElement.style.backgroundColor = 'red';
                incrementRed();
                makeMissedWordsArray();
            }            
            displayArticle();                                         
        });       
    }

    // listen to dasButton and check the answer with 'der' article and giving feedback to the user.
    function dasButton(){
        let articleElement = document.getElementById('article');
        let dasButton = document.getElementById('das');
        dasButton.addEventListener('click', function(){
            let currentArticle = articleList[currentRow];            
            if (currentArticle === 'das'){
                articleElement.style.backgroundColor = 'green';
                incrementGreen();           
                } else { articleElement.style.backgroundColor = 'red';
                incrementRed();
                makeMissedWordsArray();
            }           
            displayArticle();                                                                              
        });
    }
    // making a new array form missed worrds and meaning
    function makeMissedWordsArray(){
        let article = document.getElementById('article').innerText;
        let word = document.getElementById('question').innerText;
        let meaning = document.getElementById('eng-meaning').innerText;

        let objectPairArray = [];
        let articleArray = [];

        objectArray.push({
            word: word,
            meaning: meaning,
        });

        articleArray.push(article);

        console.log(objectPairArray);
        console.log(articleArray); 

    }
    

    function clickOnMissed(){
        clickOnMe = document.getElementById('practice-missed');
        clickOnMe.addEventListener('click', function() {
            let missedWords = parseInt(document.getElementById('t-missed').innerText);
            if (missedWords > 0) {
                Header = document.getElementsByTagName('header');
                header.style.backgroundColor = 'red';
                practiceMissedWords();
            }
        });
        
    }
   

    // practicing missed wordes
    function practiceMissedWords(){       
        let objectPairArray = [];                 
        let objectIndex = 0;              
        
        let questionElement = document.getElementById('question');
        let engMeaningElement = document.getElementById('eng-meaning');
        let articleElement = document.getElementById('article');

        displayMissedWord();

        // Function to display the missed word at the current index
        function displayMissedWord() {        
        if (objectIndex < objectPairArray.length) {        
            let missedWord = objectPairArray[objectIndex];            
            questionElement.innerText = missedWord.word;
            engMeaningElement.innerText = missedWord.meaning;
            } else {            
            alert('Good Job! There is now missed words left');
            location.reload();
        }
        function displayMissedArticle(){
            let articleArray = [];
            let articleIndex = 0;        
            if (articleIndex < articleArray.length) {        
                let missedArticle = articleArray[articleIndex];            
                articleElement.innerText = missedArticle;            
            }
            setTimeout(function(){
                articleElement.textContent = '';
                articleElement.style.backgroundColor = '';
                question.style.backgroundColor = '';            
                nextMissedPair(); }, 2000);                                               
            } 
        }

        // score space calculation
        function greenRedCal(){
            let greenBox = parseInt(document.getElementById('t-learned').textContent);
            document.getElementById('t-learned').innerText = ++greenBox;
            let redBox = parseInt(document.getElementById('t-missed').textContent);
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
        
        
        // listen to derButton and check the answer with 'der' article and giving feedback to the user.
        function derButtonM(articleArray){           
            let derButton = document.getElementById('der');                            
            derButton.addEventListener('click', function(){
                let missedArticle = articleArray[articleIndex];            
                if (missedArticle === 'der'){
                articleElement.style.backgroundColor = 'green';
                greenRedCal()          
                }                                                                          
            });
            displayMissedArticle();
        }
        

        // listen to dieButton and check the answer with 'der' article and giving feedback to the user.
        function dieButtonM(articleArray){            
            let dieButton = document.getElementById('die');
            dieButton.addEventListener('click', function(){
                let missedArticle = articleArray[articleIndex];            
                if (missedArticle === 'die'){
                articleElement.style.backgroundColor = 'green';
                greenRedCal()         
                }                                                         
            });
            displayMissedArticle();       
        }

        // listen to dasButton and check the answer with 'der' article and giving feedback to the user.
        function dasButtonM(articleArray){            
            let dasButton = document.getElementById('das');
            dasButton.addEventListener('click', function(){
                let missedArticle = articleArray[articleIndex];            
                if (missedArticle === 'das'){
                articleElement.style.backgroundColor = 'green';
                greenRedCal()          
                }                                                                                             
            });
            displayMissedArticle();
        }
        
        derButtonM();
        dieButtonM();
        dasButtonM();
                
        
    }

    getArticle();
    word();
    meaning();
    derButton();
    dieButton();
    dasButton(); 
    totalWordsCal();
    clickOnMissed();
    
    
          
});  

