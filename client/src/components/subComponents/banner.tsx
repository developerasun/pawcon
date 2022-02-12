import * as React from 'react';
import './sass/css/banner.css';
import { Button } from './button';
import { ImgBannerStyle } from '../containers/styleContainer'
import { Link } from 'react-router-dom';

export type BasicBannerProps = {
  title : string
}

export function EmailSubscribeBanner ( { title }: BasicBannerProps) {
  const handleSubmit = () => { 

  }
  return (
    <div className='emailBanner'>
      <span>Join {title} Today!</span>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, animi?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <input type="email" name="email" id="email" placeholder="Email address" required/>
          </label>
          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export type ImgBannerProps = {
  img : string
  title? : string
  description? : string
  shouldBeGrid : boolean
}

export function ImgBanner ({ img, title, description, shouldBeGrid } : ImgBannerProps) { 
  return ( 
    <section className={shouldBeGrid ? 'grid' : 'horizontal'}>
      <div className="texts">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={img} alt="banner" loading='lazy' style={ImgBannerStyle}/>
      </div>
    </section>
  )
}

export type VideoBannerProps = { 
  buttonText? : string
  linkTo? : string
} & BasicBannerProps

export function VideoBanner( { buttonText, linkTo, title } :VideoBannerProps) {
  return ( 
    <div className='videoBanner'>
      <span>{title}</span><br/>
      video here <br/>
      {buttonText && linkTo && 
        <Button btnText={buttonText} url={linkTo}/> }
    </div>
  )
}