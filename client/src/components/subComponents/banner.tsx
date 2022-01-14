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