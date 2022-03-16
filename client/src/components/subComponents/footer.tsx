import * as React from 'react';
import { v4 } from 'uuid';
import { FooterSectionProps } from '../containers/C_props';
import { ImgBanner } from './banner';
import './sass/css/footer.css'

const FooterSection = ({ sectionTitle, contents, link }: FooterSectionProps) => { 
  return (
    <li id='section' >
      <span style={{'fontWeight':'bold'}}>{sectionTitle}</span>
      <ul style={{'color':'gray'}}>
        {contents?.map((item)=>{
          return (
          <li key={v4()}>
              {item}
          </li>)
        })}
      </ul>
    </li>
  )
} 

export function Footer () {
  return (
    <div id='footerContainer'>
        <ImgBanner 
          title='Open source contributors'
          hasButton={true}
          buttonText={"Check github"}
          buttonLink={"https://github.com/developerasun/pawcon"}
          shouldBeGrid={false}
          imgSrc={'https://i.ibb.co/tbfyGZw/salute-devs.webp'}/>
      <div id='footer'>
        <FooterSection 
          sectionTitle='Social' 
          contents={['Linkedin', 'Instagram']}/>
        <FooterSection 
          sectionTitle='CareerPath' 
          contents={['Software engineer', 'Etsy owner']}/>
        <FooterSection 
          sectionTitle='Publication' 
          contents={['Perception of advertising in social media']}/>
      </div>
      <div id='copyright'>
        <FooterSection 
          sectionTitle='Copyright &copy; 2022 DEVELOPERASUN All rights reserved' />
      </div>
    </div>
  );
}
