// upload image files to imgbb.com and get img src url

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

const imgContainer = () => {
  return ( 
    <div>

      {/* home component instruction card */}
      <img src="https://i.ibb.co/5RMVbRS/woman-drawing.webp" alt="woman-drawing" />
      <img src="https://i.ibb.co/TMtMV0S/phone-money.webp" alt="phone-money" />
      <img src="https://i.ibb.co/FsRQLdR/paper-bag.webp" alt="paper-bag" />
      <img src="https://i.ibb.co/cTtgkpg/star-box.webp" alt="star-box" />

      {/* home component counter card */}
      <a href="https://ibb.co/ZzHWBys"><img src="https://i.ibb.co/DfG593X/pawcon-user.png" alt="pawcon-user" /></a>
      <a href="https://ibb.co/mcCvq1Q"><img src="https://i.ibb.co/JsRx70X/pawcon-contributor.png" alt="pawcon-contributor" /></a>
      <a href="https://ibb.co/gMKW7FQ"><img src="https://i.ibb.co/6RCtZJG/pawcon-star.png" alt="pawcon-star" /></a>
      <img src="https://i.ibb.co/0KZhFjp/camera.webp" alt="camera" />
      <img src="https://i.ibb.co/h8vffjZ/cat-running.webp" alt="cat-running" />
      <img src="https://i.ibb.co/GnKjWKK/draw-cat.webp" alt="draw-cat" />
      <img src="https://i.ibb.co/j8P4kT9/etsy.webp" alt="etsy" />
      <img src="https://i.ibb.co/1Kfyy0b/graphic-designer.webp" alt="graphic-designer" />
      <img src="https://i.ibb.co/zFYRjPz/laptop.webp" alt="laptop" />
      <img src="https://i.ibb.co/tDhzD3f/right-click.webp" alt="right-click" />
      <img src="https://i.ibb.co/P5Dj9gC/social-media.webp" alt="social-media" />
    </div>
  )
}

