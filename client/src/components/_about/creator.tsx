import * as React from 'react';
import { AboutCardsProps } from '../containers/propContatiner';
import { IMG_ABOUT_ICON, IMG_PROFILE } from '../containers/imgContainer';
import { v4 } from 'uuid';
import { Button } from '../subComponents/button';

export const AboutCards = (
    { date, title, description, image, hasButton, buttonText, buttonUrl }: AboutCardsProps ) => {
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
        { hasButton && <Button btnText={buttonText} url={buttonUrl}/> }
    </div>
)}

export function Creator () {
  return (
    <div id='creator'>

        <div id="profile">
            <h1>About Jake Sung</h1>
            <img
                loading='lazy' 
                src={IMG_PROFILE.jake} 
                alt="Jake Sung profile" />
            <span>Let's Create What People Love :) </span>
        </div>

        {/* Career 1 : Front End Developer */}
        <AboutCards 
            date='May 2021 ~ Current'
            title='Software Engineer'
            description={["Full stack", "3000++ contributions less than one year"]}
            image={IMG_ABOUT_ICON.laptop} 
            hasButton={true}
            buttonText={'Follow Github'} 
            buttonUrl={'https://github.com/developerasun'} />

        {/* Career 2 : Etsy Seller */}
        <AboutCards 
            date='Sep 2020 ~ Current'
            title='Etsy Seller'
            description={["Global top 11% sales", "Created 500++ shop items"]}
            image={IMG_ABOUT_ICON.etsy} 
            hasButton={false} />

        {/* Career 3 : Content Creator */}
        <AboutCards 
            hasButton={false}
            date='Sep 2020 ~ Current'
            title='Content Creator'
            description={[ 
                "400K views under 28 days.", 
                "2K++ followers from scratch", 
                "230++ collaborators", 
                "500++ media contents"
            ]}
            image={IMG_ABOUT_ICON.socialMedia} />

        {/* Career 4 : Graphic Designer */}
        <AboutCards 
            hasButton={false}
            date='Nov 2019 ~ Aug 2020'
            title='Graphic Designer'
            description={["Self-taught calligrapher", "Freelance logo designer", ]}
            image={IMG_ABOUT_ICON.graphicDesigner} />
    </div>
  );
}
