import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { FooterSectionProps } from '../containers/C_props';
import './sass/css/footer.css'

const FooterSection = ({ sectionTitle, contents }: FooterSectionProps) => { 
  return (
    <li id='section' >
      <span style={{'fontWeight':'bold'}}>{sectionTitle}</span>
      <ul style={{'color':'gray'}}>
        {contents.map((item)=><li key={uuidV4()}>{item}</li>)}
      </ul>
    </li>
  )
}

export function Footer () {
  return (
    <footer id='footer'>
      <FooterSection 
        sectionTitle='Social' 
        contents={['Linkedin', 'Instagram', 'Tiktok', 'Youtube', 'Pinterest' ]}/>
      <FooterSection 
        sectionTitle='CareerPath' 
        contents={['Logo designer', 'Etsy owner', 'Software engineer']}/>
      <FooterSection 
        sectionTitle='Publication' 
        contents={['Perception of advertising in social media']}/>
    </footer>
  );
}
