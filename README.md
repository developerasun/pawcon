<img src = https://img.shields.io/badge/NFT-Blockchain-blue></a>
<img src = https://img.shields.io/badge/ImgSimilarity-A.I-red></a><br/>

# What is Meow Canvas?
### *This is a ongoing project that is actively being updated*
[See Demo](https://meowcanvas.netlify.app/) <br/> 
[See Business Proposal](https://docs.google.com/presentation/d/1IHb0xbrq-HqN_qfFg0-nPBrZMRjabtDE4lY-neMKXoI/edit?usp=sharing) <br/>
<img src="https://user-images.githubusercontent.com/83855174/137261357-841014a3-63bb-4002-a39d-0de216b8e2f4.png" width=400px height=400px/>

<p>
Meow canvas is a web service project that is <b>dedicated to all the cat lovers in github.</b> It targets to provide a virtual playground for cat owners so that they can share and show off their lovely cats by exploiting technologies like <b>NFT, machine learning.</b>    
</p>

<p>
Main service feature of Meow Canvas is like below
<ul>
    <li> Upload your cat photo and draw your cat as you wish(2D, 3D) </li>
    <li> Share the drawing on social </li>
    <li> Make the drawing NFT and save it to your wallet</li>
    <li> Purchase your NFT and sell it to others </li>
    <li> Compare image similiarity between your photo and drawing </li>
    <li> Find out your ranking and increase it by resubmitting! </li>
</ul>
</p>

# Project Progress
https://user-images.githubusercontent.com/83855174/139105874-4fe3f9ec-e93e-41ec-bffe-37ae867f367d.mp4

# Project schedule
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

## Section 1 - Front End : Meow Canvas Ver 1.0.2
<li> Goal : developing responsive web/mobile screen </li> 
<li> Timeline : 4 month (2021.09.01 ~ 2022.12.31) </li>
<li> What : HTML & CSS : 2 month, Javascript : 2 month </li>

## Section 2 - Backend : Meow Canvas Ver 1.1.0
<li> Goal : developing web server, creating database tables, connecting the database with front end </li>
<li> Timeline :3 month (2022.01.01 ~ 2022.03.31)  </li>
<li> What : Node.js : 3 month, MongoDB/MariaDB : 1 month </li>

## Section 3 - Blockchain : Meow Canvas Ver 1.2.0
<li> Goal : developing smart contract, linking to (Klaytn/Ethereum/Polygon) blockchain  </li>
<li> Timeline : 4 month (2022.04.01 ~ 2022.07.31) </li>
<li> What : Go/Solidity : 2 month, Wallet, Smart contract, testnet/Mainnet, Truffle, Ganache/Geth, Docker </li>

## Section 4 - Artificial Intelligence : Meow Canvas Ver 1.3.0
<li> Goal : comparing image similiarity, generating random images for NFT with machine learning </li>
<li> Timeline : 5 month (2022.08.01 ~ 2022.12.31) </li>
<li> What : Python : 3 month, Tensorflow, Keras, Docker, AWS/Firebase </li>

## Section 5 - Launch And Maintenance : Meow Canvas Ver ?.?.?
<li> Goal : subscription business that makes at least $1K per month </li>
<li> Timeline : 2 years (2023.01.01 ~ 2025.12.31) </li>
<li> What :  web : deployment, server, domain </li>

## Target Output lists
### Front end
[Toonize](https://www.toonize.me/) <br/>
[CDG's portfolio](https://cdg-portfolio.com/) <br/>
[Jeky22](https://www.jeky22.com/) <br/>
[Kije Park](https://kijepark.com/#Home) <br/>


# Code example - Javascript 
simple slideToggle function in Javascript

``` Javascript:slideToggle.js
const trigger = document.querySelector("#trigger");
const navbar = document.querySelector(".navbar"); 
const menu_icon = document.querySelector("#trigger .menu-icon");
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


## Creator 
Jake Sung
- Github: [@developerasun](https://github.com/developerasun)
- Youtube: [@jakesung](https://www.youtube.com/channel/UC6p9E2JINhaAB7cTd8T2gig)
<br/>

## Contact
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

## Contributor
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>
    
## License 
This project is MIT-licensed. <br/>
Copyright © 2021 [Jake Sung](https://github.com/developerasun) 


