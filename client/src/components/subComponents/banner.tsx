import * as React from 'react';
import './sass/css/banner.css';
import { Button } from './button';

export type BasicBannerProps = {
  title? : string
  description? : string | string[]
  hasButton? : boolean
  buttonText? : string
  buttonLink? : string
}

export type ImgBannerProps = {
  imgSrc : string
  shouldBeGrid : boolean
} & BasicBannerProps

// $mobile : 576px;
// $tablet : 768px; 
// $desktop : 992px;
type mobileBreakpoints = 576
const mobileSize : mobileBreakpoints = 576

export function ImgBanner ({ 
  imgSrc, title, description, 
  shouldBeGrid, 
  hasButton, buttonLink, buttonText } : ImgBannerProps) { 

  return ( 
    <section 
      id='imgBanner'
      className={
      shouldBeGrid ? 'imgGrid' : 'imgVertical'
    }>
      <div className="texts">
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={imgSrc} alt="banner" loading='lazy' style={{'maxWidth' : '100%', 'height': 'auto'}}/>
      </div>
      { hasButton &&
      <Button btnText={buttonText} url={buttonLink}/>}
    </section>
  )
}

export type VideoBannerProps = { 
  videoSrc : string
} & BasicBannerProps

export function VideoBanner( { 
  hasButton, buttonText, buttonLink, 
  title, videoSrc, description } :VideoBannerProps) {
  return ( 
    <div className='videoBanner'>
      <div className="texts">
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <div className="video">
        <iframe 
          title={title} 
          src={videoSrc} 
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      {hasButton && 
        <Button btnText={buttonText} url={buttonLink}/> }
    </div>
  )
}