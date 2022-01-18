import * as React from 'react';
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
    <article>
      <span>Join {title} Today!</span>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, animi?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <input type="email" name="email" id="email" placeholder="Email address" required/>
          </label>
          <button type='submit'>Submit</button>
      </form>
    </article>
  );
}

export type ImgBannerProps = {
  img : string
  title? : string
  description? : string
}

export function ImgBanner ({ img, title, description } : ImgBannerProps) { 
  return ( 
    <section>
      <h3>{title}</h3>
      <img src={img} alt="banner" loading='lazy' style={ImgBannerStyle}/>
      <p>{description}</p>
    </section>
  )
}

export type VideoBannerProps = { 
  buttonText? : string
  linkTo? : string
} & BasicBannerProps

export function VideoBanner( { buttonText, linkTo, title } :VideoBannerProps) {
  return ( 
    <div>
      <span>{title}</span><br/>
      video here <br/>
      {buttonText && linkTo && 
        <Link to={linkTo}>
          <Button btnText={buttonText}/>
        </Link>}
    </div>
  )
}