<img src = https://img.shields.io/badge/NFT-Blockchain-blue></a>
<img src = https://img.shields.io/badge/ImgSimilarity-A.I-red></a><br/>

# What is Meow Canvas?
### *This is a ongoing project that is actively being updated*
[See Demo](https://meowcanvas.netlify.app/) <br/> 
[See Business Proposal](https://docs.google.com/presentation/d/1IHb0xbrq-HqN_qfFg0-nPBrZMRjabtDE4lY-neMKXoI/edit?usp=sharing) <br/>
![logo](https://user-images.githubusercontent.com/83855174/137261357-841014a3-63bb-4002-a39d-0de216b8e2f4.png)

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

# Project schedule
The <b>expected</b> project schedule, which is very roughly estimated, is from early August of 2021 to at the end of 2022(one and half year).
Business proposal will be updeated on a regualr basis depending on the project's progress.

### Section 1 - Front End
<li> Goal : developing responsive web application screen </li> 
<li> Timeline : 4 month (2021.09.01 ~ 2022.12.31) </li>
<li> What : HTML, CSS, Javascript </li>

### Section 2 - Backend
<li> Goal : (will be added) </li>
<li> Timeline :3 month (2022.01.01 ~ 2022.03.31)  </li>
<li> What : MongoDB/MariaDB, Web server, AWS/Firebase </li>

### Section 3 - Blockchain
<li> Goal : developing and deploying smart contract </li>
<li> Timeline : 2022.04.01 ~ 2022.07.31, 4 month </li>
<li> What : Smart contract, Polygon network </li>

### Section 4 - Artificial Intelligence
<li> Goal : (will be added) </li>
<li> Timeline : 5 month (2022.08.01 ~ 2022.12.31) </li>
<li> What : Image similiarity, random image generation </li>

### Section 5 - Launch And Maintenance 
<li> Goal : (will be added) </li>
<li> Timeline : ? (2023.01.01 ~ ) </li>
<li> What :  (will be added) </li>

## Tech details
- Language : HTML, CSS, Javascript, Python, Solidity, Go
- Framework : (will be added)
- Library : (will be added)

# Code example 1 : Javascript 
simple slideToggle function in Javascript

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

# Code example 2 : CSS
CSS for responsive web 
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

# Brainstorming for web service
<p>
- Changing subject to more wider range that provides a few different sections for cat owners. For example, 
<ul>
    <li> NFT marketplace - meowCanvas </li>
    <li> Weight tracker for feline obesity - noTummy </li>
    <li> Cat supply recommendation (affiliate) -forMeows </li>
</ul>
</p>

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
```

## Contributor
<p>
- detail will be added
</p>
    
## License 
This project is MIT-licensed. <br/>
Copyright © 2021 [Jake Sung](https://github.com/developerasun) 


