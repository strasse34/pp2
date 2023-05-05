// starting game
document.addEventListener('DOMContentLoaded', function(){
    // getting word from table
    let currentRow = 0;
    let wordList =[];
    let meaningList = [];

    function word(){
    let findWord = document.querySelectorAll("#ent-der td:nth-child(3)");   
    for (i = 0; i < findWord.length; i++){
        let word = findWord[i].textContent; 
        wordList.push(word);       
        }   
    }
    // getting words' meaning
    function meaning(){ 
    let findMeaning = document.querySelectorAll("#ent-der td:nth-child(4)");   
        for (i = 0; i <findMeaning.length; i++){
        let meaning = findMeaning[i].textContent;
        meaningList.push(meaning);
        }    
    }
    // displaying word and meaning in page
    let answer = document.getElementById('answer');
    answer.textContent = wordList[currentRow];
    let engMeaning = document.getElementById('eng-meaning')
    engMeaning.textContent = meaningList[currentRow];

    word();
    meaning();

    let derButton = document.getElementById('der');
    derButton.addEventListener('click', function() {
    currentRow++;
    if (currentRow >= wordList.length) {
      currentRow = 0;
    }
    answer.textContent = wordList[currentRow];
    engMeaning.textContent = meaningList[currentRow];
})
    
})


// function continueGame(){   
//     word();
//     meaning();
//     }
        



// function runGame(){   
//     let findArticle = document.querySelectorAll("#ent-der td:nth-child(2)");
//     let articleList = [];    
//     for (let i = 0; i < findArticle.length; i++ ){            
//         let article = findArticle[i].textContent;
//         articleList.push(article);
//         } 
//     let derButton = document.getElementById('der');
//     let dieButton = document.getElementById('die');
//     let dasButton = document.getElementById('das');
//     if (derButton.addEventListener('click')){
//         if(derButton.textContent === article[i]){            
//             incrementGreen(); 
//             continueGame();
//         } else {
//             setTimeout(article.style.backgroundColor = 'red' , 1000);
//             incrementRed();
//             continueGame();
//         }
//     }
//     if (dieButton.addEventListener('click')){
//         if(dieButton.textContent === article[i]){
//             incrementGreen();
//             continueGame();
//         } else {
//             setTimeout(article.style.backgroundColor = 'red' , 1000);
//             incrementRed();
//             continueGame();        
//         }
//     }
//     if (dasButton.addEventListener('click')){
//         if(dasButton.textContent === article[i]){
//             incrementGreen();
//             continueGame();
//         } else {
//             setTimeout(article.style.backgroundColor = 'red' , 1000);
//             incrementRed();
//             continueGame();
//         }
//     }
// }

// function incrementGreen(){
   
// }

// function incrementRed(){

// }

// function practiceRed(){

// }

