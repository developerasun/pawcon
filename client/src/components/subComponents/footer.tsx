import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { FooterStyle } from '../containers/styleContainer'

type FooterSectionProps = { 
  sectionTitle : string  
  contents : string[]
}

const FooterSectionStyle = {
  "display" : "flex", 
  "flexFlow" : "column nowrap", 
} as React.CSSProperties

const FooterSection = ({ sectionTitle, contents }: FooterSectionProps) => { 
  return (
    <li style={FooterSectionStyle}>
      <span style={{'fontWeight':'bold'}}>{sectionTitle}</span>
      <ul style={{'color':'gray'}}>
        {contents.map((item)=><li key={uuidV4()}>{item}</li>)}
      </ul>
    </li>
  )
}

export function Footer () {
  return (
    <footer style={FooterStyle}>
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
