<img src = https://img.shields.io/badge/NFT-Blockchain-blue></a>
<img src = https://img.shields.io/badge/GAN-A.I-red></a><br/>

# Table of contents 
- [Heads-up](#heads-up)
- [What is Meow Canvas?](#what-is-meow-canvas)
- [Monthly Progress](#progressmonthly)
- [Code Example](#code-example---javascript)
- [Contact](#contact)
- [Reference](#reference-website)
- [Author](#author)
- [License](#license)
- [Inspiration](#inspiration)

# Heads-up
### *This is a ongoing project that is actively being updated*
[See Beta](https://meowcanvas.netlify.app/) <br/> 

|Cross Browsing|Tested|Work|
|:------------:|:----:|:--:|
|Chrome|O|O|
|Edge|X|O|
|I.E 11|O|X|
|Safari|X|-|
|Fire Fox|X|-|

<p>
As of Oct 2021, the market share of each browser is as follows : 
</p>

<img src="https://user-images.githubusercontent.com/83855174/142166441-717e1e94-39c8-4676-a659-f59d3116f123.png" width=1000px height=300px/> <br/>

<p>
This project works best in Google Chrome and cross browsing will be handled to support Safari. If users visit in other browser, it should kindly inform to use Chrome or Safari. 
</p>

<br/>
<br/>

---

# What is Meow Canvas?
<img src="https://user-images.githubusercontent.com/83855174/137261357-841014a3-63bb-4002-a39d-0de216b8e2f4.png" width=400px height=400px/>

<p>
Meow canvas is a NFT artwork generation service for those who are not familiar with digital art and graphic design. It targets to provide easy and fun ways to create NFT artwork without any technical/artistic background and then link the artworks with major NFT marketplaces such as Opensea and Rariable.   
</p>

<p>
Once the beta is fairly developed with at least two main features, listed below, refactoring towards previously written codes will start. To make this project more efficient, cleaner, and more functional. 
</p>

<p>
The main feature of Meow Canvas, that will updated in future, is as follows. 
<ol>
    <li> Draw artwork with HTML/Javascript canvas - free/watermark </li>
    <li> Pixelate artwork with Javascfipt - free/watermark </li>
    <li> Generate artwork with Python GAN - paid </li>
    <li> Display your artwork and aim the highest rank - free</li>
    <li> Save and download the artwork to your wallet</li>
</ol>
</p>

<p> 
To acheive above, below sub-feature should be developed.
    <ol>
        <li>CRUD</li>
        <li>Login and sign up</li>
        <li>Shopping cart for membership</li>
        <li>Membership payment</li>
        <li>Search and filter</li>
    </ol>
</p>

<p>
Handicrafted design assets will be introduced in the refactored project for more clearer project identity. Currently, only banner images in image slider and logo is photoshopped and created by me. Design assets that will be added are such as : logo, icon, banner, brand colors, font.
</p>

<span><b>Icon example</b></span><br/>
<img src="https://user-images.githubusercontent.com/83855174/142178450-d5122fee-cfd5-422a-88dc-db9fd6cdef9e.png" width=1000px height=400px/><br/>
Icons made by [Nour Oumousse](https://twitter.com/NourOumousse)

---

# Progress(monthly)
## Nov, 2021
https://user-images.githubusercontent.com/83855174/143537261-009537d7-2eb6-4dfd-9a32-92aa616bd365.mp4

## Oct, 2021    
https://user-images.githubusercontent.com/83855174/139105874-4fe3f9ec-e93e-41ec-bffe-37ae867f367d.mp4 


# Code example - Javascript 
simple typing random text in Javascript

``` Javascript:typeRandom.js
const subtitle = document.querySelector(".promotion-subtitle");

let position = 0; 
const speed = 150;

const message_group_test = new Array(
    "an unique cat art you create ", 
    "an entertaining hobby ", 
    "a new way to make extra income ");

function getRandomMessage() {
    const index = Math.floor(Math.random()*message_group_test.length);
    const randomMessage = message_group_test[index];
    return randomMessage; 
}

function paintRandomMessage() {
    if (position < randomMsg.length) {
        subtitle.innerHTML += randomMsg.charAt(test_position);
        position += 1; 
        
        setTimeout(paintRandomMessage, speed); 
    } else {
        subtitle.innerHTML = subtitle.innerHTML.slice(0,subtitle.innerHTML.length-1);
        setTimeout(paintRandomMessage, speed); 

        if (subtitle.innerHTML.length === 1) {
            position = 1;
        }
    }
}

const randomMsg = getRandomMessage();
paintRandomMessage(randomMsg);

```

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
```

# Reference website
- [Toonize](https://www.toonize.me/)
- [CDG's portfolio](https://cdg-portfolio.com/)
- [Jeky22](https://www.jeky22.com/)
- [Kije Park](https://kijepark.com/#Home)
- [Alon Shklarek](https://www.alonshklarek.com/)
- [Matt Farley](https://mattfarley.ca/)
- [Finda](https://finda.co.kr/)
- [Algorithm labs](https://algorithmlabs.io/)

# Inspiration
- [It just WOW level!!](https://bruno-simon.com/#cybertruck)

# Author
Jake Sung
- Github: [@developerasun](https://github.com/developerasun)
- Youtube: [@jakesung](https://www.youtube.com/channel/UC6p9E2JINhaAB7cTd8T2gig)

# License 
This project is MIT-licensed. <br/>
Copyright © 2021 [Jake Sung](https://github.com/developerasun) 


