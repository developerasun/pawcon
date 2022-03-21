import * as React from 'react';
import { AboutCardsProps } from '../../containers/C_props';
import { v4 } from 'uuid';
import { Button } from '../../subComponents/button';
import { ImgBanner } from '../../subComponents/banner';

export const AboutCards = (
    { 
        title, date, description, 
        image, hasButton, buttonText, buttonUrl 
    }: AboutCardsProps ) => {
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
    // scroll event here
    React.useEffect(()=>{
        //  get legacy codes form pawcon-assets repo
    }, [])
  return (
    <div id='creator'>
        <div id="profile">
            <ImgBanner 
                shouldBeGrid={false}
                title='About Jake Sung'
                description={"Let's Create What People Love!"}
                imgSrc='https://i.ibb.co/X4dN67P/jake.webp'
            />
            <p id='selfIntroduction'>
                <b>Jake Sung</b> is a South Korean software engineer who started <b>Curious Pawoneer NFT project</b>. 
                It is being said that the only reason he started this massive project is 
                that he likes a cat and felt like starting a <b>'small project'</b> makes sense, 
                which obviously was not that small &#x1F408;
            </p>
        </div>

        <div id="careers">
            {/* Career 1 : Software Engineer */}
            <AboutCards 
                date='Jan 2021 ~ Current'
                title='Software Engineer'
                description={["Full stack", "Web/Blockchain"]}
                image={"https://i.ibb.co/zFYRjPz/laptop.webp"} 
                hasButton={true}
                buttonText={'Follow Github'} 
                buttonUrl={'https://github.com/developerasun'} />

            {/* Career 2 : Etsy Seller */}
            <AboutCards 
                date='Sep 2020 ~ Current'
                title='Etsy Seller'
                description={["Global top 10% sales", "Created 500++ shop items"]}
                image={'https://i.ibb.co/j8P4kT9/etsy.webp'} 
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
                image={"https://i.ibb.co/P5Dj9gC/social-media.webp"} />

            {/* Career 4 : Graphic Designer */}
            <AboutCards 
                hasButton={false}
                date='Nov 2019 ~ Aug 2020'
                title='Graphic Designer'
                description={["Calligrapher", "Logo designer", ]}
                image={"https://i.ibb.co/1Kfyy0b/graphic-designer.webp"} />
        </div>
    </div>
  );
}
