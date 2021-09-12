<img src = https://img.shields.io/badge/CatDrawing-NFT-blue></a>
<img src = https://img.shields.io/badge/ImgSimilarity-A.I-red></a>

# Welcome to Meow-Canvas! 
Meow canvas project has been developing by designerasun solely for the purpose of funness and maybe a little bit of catness. 
The expected project schedule to launch is 6 month, which is from earlly August of 2021 to at the end of January 2022. 

[See Demo](https://meowcanvas.netlify.app/)

## Prerequisite
- Metamask(Chrome extension)
- Paypal account
- Internet connection
- Browser support : (detail will be added) 

## Install 
- No specific installation needed. Simply access to the link above with internet connection. 

## Target User
- Cat owners who love their cats
- Creative souls who like to doodle

## Tech details
- Javascript, HTML canvas API
- React JS for photo gallery(photo card template)
- Solidity for NFT smart contract
- Python deep learning for image similarity comparison 

## Feature
- Upload your cat photo and draw your cat as you wish(2D, 3D) 
- Share the drawing on social 
- Make the drawing NFT and save it to your wallet
- Purchase your NFT and sell it to others
- Compare image similiarity between your photo and drawing
- Find out your ranking and increase it by resubmitting! 

## Code example
if you are an adventurous soul, please do refer to below codes

``` Javascript:app.js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

=======================================================

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

```

## Author 
Jake Sung
Github: [@designerasun](https://github.com/designerasun)
Youtube: [@jakesung](https://www.youtube.com/channel/UC6p9E2JINhaAB7cTd8T2gig)
  
## Contributor
- detail will be added

## License 
Copyright © 2021 [Jake Sung](https://github.com/designerasun)
This project is MIT-licensed.

