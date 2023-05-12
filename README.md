i learnt this (#ent-der td:nth-child(1)) from chatGPT.

# German Language Articles Flash Card
In the German language, "der," "die," and "das" are articles used to indicate the gender of nouns. They correspond to the English articles "the," but unlike in English, German articles have different forms based on the gender of the noun they accompany. The gender of nouns in German is not always predictable based on their meaning, so it's best to learn the gender along with the noun itself. So this web-based app helps learners to learn the articles.      

![Website in different screen sizes.](https://github.com/strasse34/pp2/blob/main/assets/images/responsive%20design.png)


## Pages and features
- Website has 1 pages which is a learning space for user to learn new artilces, get feedback about the choosed answers.<br>
### Features
__Navigation Bar__
- Navigation bar has 3 elements. Name and 2 navigation links including Reset and Words' list. Reset lets user to reload the page and Words' List open a PDF file of all entered words with article an English meaning.  
![Nav Bar](https://github.com/strasse34/pp2/blob/main/assets/images/header.png)<br>
![PDF List](https://github.com/strasse34/pp2/blob/main/assets/images/words-list.png)<br>
__Game Space__
- In this space a word and its meaning, but without article, is being showed to the user. User should choose one of the Der, Die or Das buttons, which represents words' article, to gusse the correct answer. If user chooses the correct answer, article with green-color background apears beside showed word, otherwise correct article but with red-color background will be shown. There is another button under article buttons that leads user to practice missed words.<br>
- Game Space Screen Shot 
![Game Space](https://github.com/strasse34/pp2/blob/main/assets/images/game-space.png)<br>
- System FeedBacks Screen Shots
![Correct Answer](https://github.com/strasse34/pp2/blob/main/assets/images/correct-answer.png)<br>
![Wrong Answer](https://github.com/strasse34/pp2/blob/main/assets/images/wrong-answer.png)<br>
__Score Space__
- In this part, usr receives statistics about his/her progress.
![Score Space](https://github.com/strasse34/pp2/blob/main/assets/images/score-space.png)<br>
__Review Space__
- Sometimes user need to recheck the last answer. For this purpose in this part of the page, system shows the last set for more reviewing.
![Review Space](https://github.com/strasse34/pp2/blob/main/assets/images/review-space.png)<br>

### Features Left to Implement
- The app needs a feature to let users enter new sets of words and practice them.
- The app needs to do the same thing with meaning of the words.
## Testing 
- Lighthouse in Developer Tools <br>
![Lighthouse Scores](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/lighthouse.png) 
- HTML Validator
  - 4 warnings were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F#textarea). The warnings were about not using h1 headers in sections. It suggested to use h2 instead but I prefer to use them. 
- CSS Validator
  - No error were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator).
- jshint
  - I got bellow returns when passing through the offiial [jshint] (https://jshint.com/) at the first check. I fixed all the warnings and undefined variables in the file and they dispeared.
    There are 38 functions in this file.
    Function with the largest signature take 0 arguments, while the median is 0.
    Largest function has 12 statements in it, while the median is 7.5.
    The most complex function has a cyclomatic complexity value of 3 while the median is 1.

    Two warnings
        18	Missing semicolon.
        261	Missing semicolon.
    Three undefined variables
        36	i
        36	i
        36	i
        37	i
        48	i
        48	i
        48	i
        49	i
        125	question
        329	question
        239	isRed
        243	isRed
        253	isRed
        253	isRed
     
### Unfixed Bugs
There is an error while validating in W3C. I tried with Microsoft Edge too and got the same error. I explored the internet and found out that there is a problem with Github. Github is working on it at this moment.  
## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - In the "Code and automation" section of the sidebar, click Pages
  - Under Github Pages, click on button "Visit Site".
The live link can be found here - (https://strasse34.github.io/first-project/)
## Credits 
### Content 
- The statistics in the home pages about freelancers were taken from [Exploding Topics] (https://explodingtopics.com/blog/freelance-stats)
- Google, youtube and chat-GPT were the main sources to find answers for my questions.
- I got the idea for Login page from Love Running project, Sign up page.
- I learnt from my mentor Mr. Spencer Barriball to link the address email and phone number in contact section to the relevant app.  
- The icons in the all webpages were taken from [Font Awesome](https://fontawesome.com/)
### Media
- The photos used on the home page as the banner is from (https://www.aajenglish.tv/news/30276709)
- The images used for banner in Apply Page is from [The Guardian] (https://www.theguardian.com/global-development/2021/mar/02/id-like-to-join-pixar-one-day-meet-afghanistans-first-female-animator)
- All the other artworks are from Shamsia Hassani, the Afghan girl artist (https://www.shamsiahassani.net/). The artworks I used in my website are trand in the internet. 
- I used (https://www.wix.com/logo/maker) free version to make a logo.