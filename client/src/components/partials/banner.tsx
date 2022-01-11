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
          <button type={'submit'}>Submit</button>
      </form>
    </article>
  );
}

export type ImgBannerProps = {
  img : string
}

export function ImgBanner ({ img } : ImgBannerProps) { 
  return ( 
    <section>
      <img src={img} alt="banner" loading='lazy' style={ImgBannerStyle}/>
    </section>
  )
}