i learnt this (#ent-der td:nth-child(1)) from chatGPT.

# German Language Articles Flash Card
In the German language, "der," "die," and "das" are articles used to indicate the gender of nouns. They correspond to the English articles "the," but unlike in English, German articles have different forms based on the gender of the noun they accompany. The gender of nouns in German is not always predictable based on their meaning, so it's best to learn the gender along with the noun itself. So this web-based app helps learners to learn the articles.      

![Website in different screen sizes.](https://github.com/strasse34/pp2/blob/main/assets/images/responsive%20design.png)


## Pages and features
- Website has 1 pages which is a learning space for user to learn new artilces, get feedback about the choosed answers.
###Features
__Navigation Bar__
- Navigation bar has 3 elements. Name and 2 navigation links including Reset and Words' list. Reset lets user to reload the page and Words' List open a PDF file of all entered words with article an English meaning.  
![Nav Bar](https://github.com/strasse34/pp2/blob/main/assets/images/header.png)<br>
![PDF List](https://github.com/strasse34/pp2/blob/main/assets/images/words-list.png)<br>
- Game Space
- A word and its meaning, but without article, is being showed to the user. User should choose one of the Der, Die or Das buttons, which represents words' article, to gusse the correct answer. If user chooses the correct answer, article with green-color background apears beside showed word, otherwise correct article but with red-color background will be shown.<br>
- There is another button under article buttons. It leads user to practice missed words. 
![Game Space](https://github.com/strasse34/pp2/blob/main/assets/images/game-space.png)<br>
![Answer Space](https://github.com/strasse34/pp2/blob/main/assets/images/answer-space.png)<br>
![Buttons](https://github.com/strasse34/pp2/blob/main/assets/images/buttons.png)<br>
![Correct Answer](https://github.com/strasse34/pp2/blob/main/assets/images/correct-answer.png)<br>
![Wrong Answer](https://github.com/strasse34/pp2/blob/main/assets/images/wrong-answer.png)<br>



- 
   all five pages, the full responsive navigation bar includes links to the home page, apply page, supporter page, institute page and Log In page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  - In the right side of navigation bar, the log in part with drop-down list help users to access to log in page. 
![Nav Bar](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/navbar.png)
- __The Home Page Banner__
  - The home page banner shows an Afghan woman wearing the Burka hijab, which she was forced to wear by the Taliban, buying a few slices of bread. I used this image to show the current situation of Afghan women. Bread has deep meaning and respect in Afghan culture. One of the common words for bread is "Rozi" which means you earn money so that you can eat something. The woman in the picture represents Afghan women who worked, had jobs before, and could bring bread (Rozi) to their home. But it is different now.  
  - There are logo and text on the home page image that make some questions in users' minds. 
![Home Page](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/homepage-img.png)
- __Statistics Section__
  - This section provides some statistics about freelancers to catch more attention of users. 
  
![Statistics Section](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/statistics-section.png)
- __Talib Section__
  - This section includes one image and 2 headers and 2 short paragraphs. 
  - The image clearly shows the current situation of girls and women in Afghanistan.  
  - The text explains shortly the picture and comes up with a possible solution.  
![Talib Section](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/talib-section.png)
- __Video Section__
  - This section includes a YouTube video from ITV News channel. 
  - The video is a short report on the situation of Afghan women after the announcement of the ban on education and work by the Taliban.   
![Vedio Section](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/video.png)

- __Contact Section__ 
  - This section includes map and footer.  
  - The map shows the location of the Haami which is not real.
  - The footer includes 3 parts. 1- logo and copyright text, 2- contact details and 3- social media.
  - Email address and phone are clickable and take users to relevant apps.
  - Social media icons are linked to their own pages. 
![Contact](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/contact-section.png)
### Features in Form Pages
- __Banners__
  - Each form page has specific banner which is relevant to the content. The name of the form is added at the bottom of each banner.   
![Apply Page Banner](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/apply-banner.png)
![Supporter Page Banner](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/supporter-banner.png)
![Institute Page Banner](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/institute-banner.png)
- __Forms__
  - According to the required information, a specific form has been designed for each group of users.
  - In addition to the information, each form provides sign up form for users to make their accounts. 
- __Apply Form__
![Apply Form](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/apply-form.png)
- __Supporter Form__
![Supporter Form](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/supporter-form.png)
- __Institute Form__
![Institute Form](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/institute-form.png)
### Features in Log In Page
  - It shows a girl who, although she is standing by the window of a dark house - the current situation in Afghanistan - but her heart is hopeful.
  - The users who have accounts on the website can log in to their accounts through this page.
![Log In Page](https://github.com/strasse34/first-project/blob/main/assets/images/screenshots/login-page.png) 
### Features Left to Implement
- The website needs some more information pages. Every group of target users should lead to information pages and then directed to form pages. 
- profile pages should be coded for each target group users. 
- All the profiles should be integrated to each other.
- payment facilities should be added to supporters' profile.
- website should be integrated with institute partners' systems for data exchange.  
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