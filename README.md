# German Language Articles Flash Card
In the German language, "der," "die," and "das" are articles used to indicate the gender of nouns. They correspond to the English articles "the," but unlike in English, German articles have different forms based on the gender of the noun they accompany. The gender of nouns in German is not always predictable based on their meaning, so it's best to learn the gender along with the noun itself. So this web-based app helps adult German language learners to learn the articles. Children may use this educational app too, but it would be a little boring because there are no Childish colorful elements in the app.       

![Website in different screen sizes.](assets/images/responsive-design.png)
[See Live project](https://strasse34.github.io/pp2/)


## Pages and features
The website has 1 page which provides a learning space for users to learn new articles and get feedback about the chosen answers.<br>
### Features
__Navigation Bar__<br>
The navigation bar has 3 elements. The website title and 2 navigation links: Reset and Words' list. Reset-link lets the user reload the page and Words' List-link opens a PDF file that contains all words with their article and English meaning.  
![Nav Bar](assets/images/header.png)<br>
![PDF List](assets/images/words-list.png)<br>
__Game Space__<br>
In this space a word and its meaning are being shown, but without an article, to the users. Users should choose one of the Der, Die, or Das buttons, which represents words' article, to give the correct answer. If users choose the correct answer, the article with a green-color background appears beside the word, otherwise correct article, but with red-color background, will be shown. There is another button under the article buttons that leads users to practice missed words.<br>
Game Space Screen Shot <br> 
![Game Space](assets/images/game-space.png)<br>
System FeedBacks Screen Shots <br>
![Correct Answer](assets/images/correct-answer.png) 
![Wrong Answer](assets/images/wrong-answer.png)<br>

__Score Space__<br>
In this part, users receive statistics about their progress after each try. <br>
![Score Space](assets/images/score-space.png)<br>
__Review Space__<br>
Sometimes users need to recheck the last answer. For this purpose in this part of the page, the system shows the last delivered set for more reviewing.<br>
![Review Space](assets/images/review-space.png)<br>
__Features Left to Implement__<br>
- The app needs a feature to let users enter new sets of words and practice them.
- The app needs to do the same thing with the meaning of the words.
## Testing 
__Lighthouse in Developer Tools__ <br>
![Lighthouse Scores](assets/images/lighthouse.png)<br> 
__HTML Validator__<br>
  4 warnings were returned when passing through the official [W3C validator](https://validator.w3.org/). The warnings were about not using h1 headers in sections. It suggested to use h2 instead of h1, but I preferred to use h1.<br><br>
  ![Warnings](https://github.com/strasse34/pp2/blob/main/assets/images/html-validation.png)<br>
__CSS Validator__<br>
  No error were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).<br><br>
__jshint__<br>
  I got the bellow returns when passing through the official [jshint] (https://jshint.com/) at the first check. I fixed all the warnings and undefined variables in the file and they disappeared.<br><br>
- There are 40 functions in this file.
- Function with the largest signature take 0 arguments, while the median is 0.
- Largest function has 12 statements in it, while the median is 7.5.
- The most complex function has a cyclomatic complexity value of 3 while the median is 1.

- Two warnings
    - 18	Missing semicolon.
    - 261	Missing semicolon.
- Three undefined variables
    - 36	i
    - 36	i
    - 36	i
    - 37	i
    - 48	i
    - 48	i
    - 48	i
    - 49	i
    - 125	question
    - 329	question
    - 239	isRed
    - 243	isRed
    - 253	isRed
    - 253	isRed
    
__Unfixed Bugs__<br>
No unfixed bugs are remained. <br> 
## Deployment
I used gitpod and codeanywhere to develop this app. I used git status, git log, git add ., git commit -m "", git pull and git push commands in these two IDEs.<br>
The site was deployed to GitHub pages. The steps to deploy are as follows:<br> 
  - In the GitHub repository, navigate to the Settings tab 
  - In the "Code and automation" section of the sidebar, click Pages
  - Under Github Pages, click on button "Visit Site".
The live link can be found [here](https://strasse34.github.io/pp2/)
## Credits 
__Content__<br> 
- The codes are original and I did not use any code from other webpages. But I learned many things from the internet that I used during development.
- There is no special content in the page unless the words which I got them from my German Language books.<br>
__Media__<br>
I have not used any special media in my app.<br>