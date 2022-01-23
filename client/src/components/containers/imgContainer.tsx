// Instruction images
import womanDrawing from '../../assets/img/icons/woman-drawing.webp'
import phoneMoney from '../../assets/img/icons/phone-money.webp'
import paperBag from '../../assets/img/icons/paper-bag.webp'
import starBox from '../../assets/img/icons/star-box.webp'

// Banner images 
import saluteDev from '../../assets/img/banner/salute-devs.webp'
import helpCreator from '../../assets/img/banner/help-creators.webp'

// About icons
import etsy from '../../assets/img/icons/etsy.webp'
import graphicDesigner from '../../assets/img/icons/graphic-designer.webp'
import laptop from '../../assets/img/icons/laptop.webp'
import socialMedia from '../../assets/img/icons/social-media.webp'

// Single profile image
import jake from '../../assets/img/banner/jake.webp'

// Feature icons
import pencilCat from '../../assets/img/icons/draw-cat.webp'
import rightClick from '../../assets/img/icons/right-click.webp'
import camera from '../../assets/img/icons/camera.webp'

export const IMG_INSTRUCTION = [
    { description : "Create Your NFTs With Ease. Pick the mode you like and enjoy it.", 
      image : womanDrawing,
    },
    { description : "Save It To Wallet. Protect the asset safely.", 
      image : paperBag,
    },
    { description : "List It In Marketplace. Do Marketing And Make Sales.", 
      image : phoneMoney,
    },
    { description : "Donate And Support. Buy Me A Coffee ", 
      image : starBox, 
    },
]
export const IMG_FEATURE = [
    { 
      image : pencilCat,
      title : "Premade Templates",
      description : "Pick template and draw on it.", 
    },
    { 
      image : rightClick,
      title : "One-click Drawing",
      description : "One-click and Your artwork is ready.", 
    },
    { 
      image : camera,
      title : "One-click Art Filter",
      description : "One-click and Filter your images", 
    },
]

export const IMG_BANNER = {
    helpCreator , 
    saluteDev 
} 

export const IMG_ABOUT_ICON = {
  etsy, 
  graphicDesigner, 
  laptop, 
  socialMedia
}

export const IMG_PROFILE = {
  jake
}