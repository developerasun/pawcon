import * as React from 'react';
import { ImgBannerStyle } from '../containers/styleContainer'

export type BannerProps = {
  title : string
}

export function EmailSubscribeBanner ( { title }: BannerProps) {
  const handleSubmit = () => { 

  }
  return (
    <article>
      <h3>Join {title} Today!</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, animi?</p>

      <form onSubmit={handleSubmit}>
          <input type="email" name="" id="" placeholder="enter your email" required/>
          <button>Submit</button>
      </form>
    </article>
  );
}

export type ImgBannerProps = {
  src : string
}

export function ImgBanner ({ src } : ImgBannerProps) { 
  return ( 
    <article>
      <img src={src} alt="image banner" style={ImgBannerStyle}/>
    </article>
  )
}