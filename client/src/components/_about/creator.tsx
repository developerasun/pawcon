import * as React from 'react';
import { AboutCardsProps } from '../containers/propContatiner';
import { IMG_ABOUT_ICON, IMG_PROFILE } from '../containers/imgContainer';
import { v4 } from 'uuid';
import { Button } from '../subComponents/button';
import { ImgBanner } from '../subComponents/banner';

export const AboutCards = (
    { date, title, description, image }: AboutCardsProps ) => {
  return (
    <div className="career">
        <div className="title">
            <img src={image} alt='career icon' loading='lazy'/>
            <h3>{title}</h3>
            <p className='date'>{date}</p>
        </div>

        <div className='description'>
        {/* union type assertion */}
        {typeof description !=='string' 
            // if array, renders items in map
            ? description.map((item) => {
            return <li key={v4()}>{item}</li> }) 

            // if string, renders in paragraph
            : <p>{description}</p> }
        </div>
    </div>
)}

export function Creator () {
  return (
    <div className='creator'>

        <div className="profile">
            <h1>About Jake Sung</h1>
            <img
                style={{"borderRadius" : "50%", "maxWidth" : "50%", "height" : "auto" }}
                loading='lazy' 
                src={IMG_PROFILE.jake} 
                alt="Jake Sung profile" />
            <span>Let's Create What People Love :) </span>
        </div>

        {/* Career 1 : Front End Developer */}
        <AboutCards 
            date='May 2021 ~ Current'
            title='Front End Developer'
            description={["HTML5", "CSS3/Sass", "JS/TS", "React"]}
            image={IMG_ABOUT_ICON.laptop} />
        <Button 
            btnText='Follow Github'
            url='https://github.com/developerasun' />

        {/* Career 2 : Etsy Seller */}
        <AboutCards 
            date='Sep 2020 ~ Current'
            title='Etsy Seller'
            description={["Global sales ranking top 11%", "350++ sales", "Created 500++ shop items"]}
            image={IMG_ABOUT_ICON.etsy} />
        <Button 
            btnText='Explore shop'
            url='https://www.etsy.com/shop/DesignerAsun' />

        {/* Career 3 : Content Creator */}
        <AboutCards 
            date='Sep 2020 ~ Current'
            title='Content Creator'
            description={[ 
                "TikTok : 400K video views under 28 days.", 
                "Instagram  : 2K++ followers", 
                "Pinterest : Group board with 230++ collaborators", 
                "Created 500++ social media contents"
            ]}
            image={IMG_ABOUT_ICON.socialMedia} />
        <Button 
            btnText='Instagram'
            url='https://www.instagram.com/designerasun/' />
        <Button 
            btnText='Tiktok'
            url='https://www.tiktok.com/@owltheletterer' />
        <Button 
            btnText='Pinterest'
            url='https://www.pinterest.com/designerasun/' />

        {/* Career 4 : Graphic Designer */}
        <AboutCards 
            date='Nov 2019 ~ Aug 2020'
            title='Freelance Logo Designer'
            description={["Self-taught calligrapher", "Created 100++ typographic logo remakes", ]}
            image={IMG_ABOUT_ICON.graphicDesigner} />
    </div>
  );
}
