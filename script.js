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

        if(remainWords.innerText === 0){
            alert('There is no new words to practice. Please check Missed Words Practice to practice missed words!');
            checkBox = document.getElementById('missed-words-practic').checked;
            if(checkBox){
                parcticeMissedWords();
            } else {
                location.reload();
            }     
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
                makeMissedWordsTable();    
            }
            let article = articleList[currentRow];            
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
            makeMissedWordsTable();
        }
            let article = articleList[currentRow];
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
            makeMissedWordsTable();
        }            
            let article = articleList[currentRow];
            displayArticle();                                                                              
        });
    }

    function makeMissedWordsTable(){
        let article = document.getElementById('article').innerText;
        let word = document.getElementById('question').innerText;
        let meaning = document.getElementById('eng-meaning').innerText;

        let tbody = document.getElementById('missed-words').innerText;
        gbodyHTML+=`
        <dr>
            <td>${'article'}</td>
            <td>${'word'}</td>
            <td>${'meaning'}</td>
        </dr>
        `;
    }


    function parcticeMissedWords(){
        // getting word from table
        let mCurrentRow= 0;
        let mArticleList = [];    
        let mWordList =[];
        let mMeaningList = []; 
   
        // getting words
        function word(){
            let findWord = document.querySelectorAll("#missed-words td:nth-child(2)");   
            for (i = 0; i < findWord.length; i++){
            let word = findWord[i].textContent; 
            mWordList.push(word);       
            } 
            let question = document.getElementById('question');
            question.textContent = mWordList[currentRow];        
        }
        // getting words' meaning
        function meaning(){ 
            let findMeaning = document.querySelectorAll("#missed-words td:nth-child(3)");   
            for (i = 0; i <findMeaning.length; i++){
            let meaning = findMeaning[i].textContent;
            mMeaningList.push(meaning);
            }
            let engMeaning = document.getElementById('eng-meaning');
            engMeaning.textContent = mMeaningList[currentRow];           
        } 
        // getting article
        function getArticle(){
            let findArticle = document.querySelectorAll("#missed-words td:nth-child(1)");        
            for (let i = 0; i < findArticle.length; i++ ){            
                let article = findArticle[i].textContent;
                mArticleList.push(article);
                }        
        }
        
        // score space calculation
        function incrementGreen(){
            let greenBox = parseInt(document.getElementById('t-learned').textContent);
            document.getElementById('t-learned').innerText = ++greenBox;
        }

        function dicrementRed(){
            let redBox = parseInt(document.getElementById('t-missed').textContent);
            document.getElementById('t-missed').innerText = --redBox;
            
            redBox = parseInt(document.getElementById('t-missed').textContent);
            if(redBox === 30){
                alert('GOOOOD JOB!!!! You learned all the words.');           
                location.reload();
            }
        }   
        
        // showing next 'word' and 'meaning' after previous 'word' and 'meaning' checked. 
        function nextPair(){
            currentRow++;
            if (currentRow >= mWordList.length){
                currentRow = 0;
            }
            word();
            meaning();        
        }
        
        // proper article from articleList displayed for 2 seconds and then get back to default and listen to next click.
        function displayArticle(){
            let articleElement = document.getElementById('article');
            articleElement.textContent = mArticleList[currentRow];
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
                    incrementGreen();
                    dicrementRed();                                                                                                            
                    } else { articleElement.style.backgroundColor = 'red';}                
                let article = articleList[currentRow];            
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
                dicrementRed();          
                } else { articleElement.style.backgroundColor = 'red';
                }
                let article = articleList[currentRow];
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
                dicrementRed();            
                } else { articleElement.style.backgroundColor = 'red';
                }            
                let article = articleList[currentRow];
                displayArticle();                                                                              
            });
        }
        getArticle();
        word();
        meaning();
        derButton();
        dieButton();
        dasButton();
    }

    getArticle();
    word();
    meaning();
    derButton();
    dieButton();
    dasButton(); 
    totalWordsCal();
          
});  

