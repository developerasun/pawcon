<img src = https://img.shields.io/badge/NFT-Blockchain-blue></a>
<img src = https://img.shields.io/badge/ImgSimilarity-A.I-red></a>

# Brainstorming for web service
- Changing subject to more wider range that provides a few different sections for cat owners. For example, 
<ul>
    <li> NFT marketplace - meowCanvas </li>
    <li> Weight tracker for feline obesity - noTummy </li>
    <li> Cat supply recommendation (affiliate) -forMeows </li>
</ul>
<br/>

# What is Meow Canvas?  
[See Demo](https://meowcanvas.netlify.app/) <br/>
[See Business Proposal](https://docs.google.com/presentation/d/1IHb0xbrq-HqN_qfFg0-nPBrZMRjabtDE4lY-neMKXoI/edit?usp=sharing)

Meow canvas is a web service project that is <b>dedicated to all the cat lovers in github.</b> It targets to provide a virtual playground for cat owners so that they can share and show off their lovely cats by exploiting technologies like <b>NFT, machine learning.</b>    
<br/>

Main service feature of Meow Canvas is like below
<ul>
    <li> Upload your cat photo and draw your cat as you wish(2D, 3D) </li>
    <li> Share the drawing on social </li>
    <li> Make the drawing NFT and save it to your wallet</li>
    <li> Purchase your NFT and sell it to others </li>
    <li> Compare image similiarity between your photo and drawing </li>
    <li> Find out your ranking and increase it by resubmitting! </li>
</ul>
<br/>

# Project schedule
The <b>expected</b> project schedule, which is very roughly estimated, is from early August of 2021 to at the end of 2022(one and half year).
<ol>
<li> Section 1 - (2021.10.01 ~ 2022.12.31, 3 month) : Web front end development, payment -> linking to backend database </li>
<li> Section 2 - (2022.01.01 ~ 2022.03.31, 3 month) : NFT smart contract, blockchain selection -> linking to the web </li>
<li> Section 3 - (2022.04.01 ~ 2022.07.31, 4 month) : Machine learning image similarity, database & cloud server selection -> linking to the web </li>
<li> Section 4 - (2022.08.01 ~ 2022.12.31, 5 month) : Launch and maintenance -> monetization </li>
</ol>
<br/>

## Tech details
- Language : HTML, CSS, Javascript, Python, Solidity, Go
- Framework : (will be added)
- Library : (will be added)
<br/>

## Code example 1 : Javascript 
if you are an adventurous soul, please do refer to below codes

``` Javascript:slideToggle.js
const trigger = document.querySelector("#trigger");
const navbar = document.querySelector(".navbar"); 

const TRIGGER_MENU = "MENU";
const TRIGGER_HIDE = "HIDE"; 
const CLASS_ACITVE = "active"; 
const CLASS_INACTIVE = "hidden"; 

function triggerOn(event) { 
    event.preventDefault();

    if (trigger.innerHTML === TRIGGER_MENU) {
        console.log("tirgger clicked")
        trigger.innerHTML = TRIGGER_HIDE;
        navbar.classList.add(CLASS_ACITVE); 
    } else { 
        console.log("trigger clicked again");
        trigger.innerHTML = TRIGGER_MENU;
        navbar.classList.remove(CLASS_ACITVE);
        navbar.classList.add(CLASS_INACTIVE);
    }
}

trigger.addEventListener("click", triggerOn);

```

## Code example 2 : CSS
``` CSS: index.css
.navigation #trigger {
    display: block;
    /* position: fixed; */
    background-color: #eee;
    color: black;
    width: 100%;
    height: 40px;
    text-align: left;
}

.hidden { 
    display: none;
    /* transition: linear .5s; */
}

.active { 
    display: block;
    width: 100%;
    height: auto;
    line-height: 40px;
}

/* media query : PC size */
@media screen and (min-width:721px) {

    .navigation {
        display: flex;
        /* position: fixed; */
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        background-color:lightpink;
    }
```

<br/>

## Creator 
Jake Sung
- Github: [@developerasun](https://github.com/developerasun)
- Youtube: [@jakesung](https://www.youtube.com/channel/UC6p9E2JINhaAB7cTd8T2gig)
<br/>

## Contact
This is a open project that everyone interested can join in. Simply email me like below and then we will work it together. 
Note that it is not 'developerasun@gmail.com', but 'designerasun@gmail.com'. 

``` 
To designerasun@gmail.com 
I like cat. So count me in.
From cuteLoaf@meow.com
```
<br/>

[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:designerasun@gmail.com)](mailto:designerasun@gmail.com)
[KakaoTalk Open Chat](https://open.kakao.com/o/giViVoCd)
<br/>

## Contributor
- detail will be added
<br/>

## License 
Copyright © 2021 [Jake Sung](https://github.com/developerasun) <br/>
This project is MIT-licensed.

