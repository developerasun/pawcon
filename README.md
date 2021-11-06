<img src = https://img.shields.io/badge/NFT-Blockchain-blue></a>
<img src = https://img.shields.io/badge/GAN-A.I-red></a><br/>

# What is Meow Canvas?
### *This is a ongoing project that is actively being updated*
[See Demo](https://meowcanvas.netlify.app/) <br/> 
<img src="https://user-images.githubusercontent.com/83855174/137261357-841014a3-63bb-4002-a39d-0de216b8e2f4.png" width=400px height=400px/>

<p>
Meow canvas is a NFT artwork generation service for those who are not familiar with digital art and graphic design. It targets to provide easy and fun ways to create NFT artwork without any technical/artistic background and then link the artworks with major NFT marketplaces such as Opensea and Rariable.   
</p>

<p>
The main feature of Meow Canvas is as follows. 
<ol>
    <li> Draw artwork with HTML/Javascript canvas - free/watermark </li>
    <li> Pixelate artwork with Javascfipt - free/watermark </li>
    <li> Generate artwork with Python GAN - paid </li>
    <li> Display your artwork and aim the highest rank - free</li>
    <li> Save and download the artwork to your wallet</li>
</ol>
</p>

<p> 
To acheive above, below sub feature should be developed.
    <ol>
        <li>Login and sign up</li>
        <li>Shopping cart for membership</li>
        <li>Membership payment</li>
    </ol>
</p>


# Progress(monthly)
## Oct, 2021    
https://user-images.githubusercontent.com/83855174/139105874-4fe3f9ec-e93e-41ec-bffe-37ae867f367d.mp4 


# Schedule
The <b>expected</b> project schedule, which is very roughly estimated, is from early August of 2021 to at the end of 2022(one and half year).
Business proposal will be updeated on a regualr basis depending on the project's progress.

## Workflow
<ol>
    <li>Market research and plannning</li>
    <li>Service/product brainstorming</li>
    <li>Marketing/Branding concept</li>
    <li>Wireframe</li>
    <li>Front end coding</li>
    <li>Backend coding</li>
    <li>Launch and maintenance</li>
</ol>

## Section 0 - Programming Basic
<li> Goal : stepping my foot into programming</li>
<li> Timeline : 4 month (2021.05.17 ~ 2021.09.10) : registering blockchain training school</li>
<li> What : Python, Go, and blockchain theory </li>

## Section 1 - Front End 
<li> Goal : developing responsive website from the bottom </li> 
<li> Deadline : 4 month (2021.09.01 ~ 2022.12.31) : self-taught </li>
<li> What : HTML, CSS, Javascript(basic, web browser), React </li>

## Section 2 - Artificial Intelligence 
<li> Goal : developing efficient generative adversarial network model</li>
<li> Deadline : 6 month (2021.12.27 ~ 2022.06.22) : registering AI training school</li>
<li> What : Tensorflow, Keras, machine learning theory </li>

## Section 3 - Backend 
<li> Goal : developing stable web server and database </li>
<li> Deadline :5 month (2022.06.25 ~ 2022.10.31)  </li>
<li> What : Node.js, MongoDB/MariaDB</li>

## Section 4 - Blockchain
<li> Goal : developing smart contract, linking to (Klaytn/Ethereum/Polygon) blockchain  </li>
<li> Deadline : 2 month (2022.11.01 ~ 2022.12.31)</li>
<li> What : Solidity, Go</li>

## Section 5 - Launch And Maintenance
<li> Goal : subscription business with monthly $1K net profits </li>
<li> Deadline : 2 years (2023.01.01 ~ 2025.12.31) </li>
<li> What :  deployment, monetization </li>

# Code example - Javascript 
simple slideToggle function in Javascript

``` Javascript:slideToggle.js
const trigger = document.querySelector("#trigger");
const navbar = document.querySelector(".navbar"); 
const menuText = document.createElement("span");

const TRIGGER_MENU = "MENU";
const TRIGGER_HIDE = "HIDE"; 
const CLASS_ACITVE = "active"; 
const CLASS_INACTIVE = "hidden"; 

function triggerOn(event) { 
    event.preventDefault();

    if (menuText.innerHTML  === TRIGGER_MENU) { 
        menuText.innerHTML = TRIGGER_HIDE;
        debugger;
        navbar.classList.add(CLASS_ACITVE); 

    } else { 
        menuText.innerHTML = TRIGGER_MENU;
        navbar.classList.remove(CLASS_ACITVE);
        debugger;
        navbar.classList.add(CLASS_INACTIVE);
    }
}

menuText.innerHTML = TRIGGER_MENU;
trigger.prepend(menuText);
trigger.addEventListener("click", triggerOn);

```

# Author
Jake Sung
- Github: [@developerasun](https://github.com/developerasun)
- Youtube: [@jakesung](https://www.youtube.com/channel/UC6p9E2JINhaAB7cTd8T2gig)

# Contributor
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>

# Contact
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:designerasun@gmail.com)](mailto:designerasun@gmail.com)
[KakaoTalk Open Chat](https://open.kakao.com/o/giViVoCd)
<p>
This is a open project that everyone interested can join in. Simply email me like below and then we will work it together. 
Note that it is not 'developerasun@gmail.com', but 'designerasun@gmail.com'. 
</p>

``` 
To designerasun@gmail.com 
I like cat. So count me in.
From cuteLoaf@meow.com

Topics for brainstroming - for example,  
 - NFT marketplace - meowCanvas : selling NFTs 
 - Weight tracker for feline obesity - noTummy : SaaS subscription added 
 - Cat supply recommendation -forMeows : affiliate marketing 
```

# Reference website
[Toonize](https://www.toonize.me/) <br/>
[CDG's portfolio](https://cdg-portfolio.com/) <br/>
[Jeky22](https://www.jeky22.com/) <br/>
[Kije Park](https://kijepark.com/#Home) <br/>
[Alon Shklarek](https://www.alonshklarek.com/)
    
# License 
This project is MIT-licensed. <br/>
Copyright © 2021 [Jake Sung](https://github.com/developerasun) 


