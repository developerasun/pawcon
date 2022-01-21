import * as React from 'react';
import { AboutCardsProps, IButtonProps } from '../containers/propContatiner';
import { v4 } from 'uuid';
import './sass/css/about.css'
import { Button } from '../subComponents/button';

const AboutCards = (
    { date, title, description, image }: AboutCardsProps ) => {
  return (
    <div className="career">
        <div className="title">
            <img src={image} alt='career icon' />
            <h3>{title}</h3>
            <p>{date}</p>
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

export function About () {
  return (
    <>
    {/* Career 1 : Front End Developer */}
    <AboutCards 
        date='May 2021 ~ Current'
        title='Front End Developer'
        description={["HTML5", "CSS3/Sass", "JS/TS", "React"]}
        image='' />
    <Button 
        btnText='Follow Github'
        url='https://github.com/developerasun' />

    {/* Career 2 : Etsy Seller */}
    <AboutCards 
        date='May 2021 ~ Current'
        title='Front End Developer'
        description={["HTML5", "CSS3/Sass", "JS/TS", "React"]}
        image='' />
    <Button 
        btnText='Follow Github'
        url='https://github.com/developerasun' />

    {/* Career 3 : Social Media Marketer */}
    <AboutCards 
        date='May 2021 ~ Current'
        title='Front End Developer'
        description={["HTML5", "CSS3/Sass", "JS/TS", "React"]}
        image='' />
    <Button 
        btnText='Follow Github'
        url='https://github.com/developerasun' />

    {/* Career 4 : Graphic Designer */}
    <AboutCards 
        date='May 2021 ~ Current'
        title='Front End Developer'
        description={["HTML5", "CSS3/Sass", "JS/TS", "React"]}
        image='' />
    <Button 
        btnText='Follow Github'
        url='https://github.com/developerasun' />








<div className="end">
    <div className="end-title">
        <h2>Who developed PawCon?</h2>
        <img src="../img/photo/profile.jpg" 
            loading="lazy"
            alt="profile" 
            id="profile" />
    </div>
    <div className="end-about-developer">
        <h2>About Jake Sung</h2>
        <div className="careers">
            <div className="career">
                <div className="career-title">
                    <h3>Etsy Seller</h3>
                    <p>(Sep 2020 ~ Current)</p>
                </div>
                <ul className="career-text">
                    <li>Global ranking top 13%</li>
                    <li>350++ sales</li>
                    <li>Planned and listed 400++ handmade shop items</li>
                </ul>
                <button><a href="https://www.etsy.com/shop/DesignerAsun">Explore shop</a></button>
            </div>
            <div className="career">
                <div className="career-title">
                    <h3>Content Creator</h3>
                    <p>(Sep 2020 ~ Current)</p>
                </div>
                <ul className="career-text">
                    <li>TikTok : 400K video views under 28 days.</li>
                    <li>Instagram  : 2K++ followers</li> 
                    <li>Pinterest : Group board with 230++ collaborators</li> 
                    <li>Planned and created 500++ social media contents</li>
                </ul>
                <div className="buttons">
                    <button><a href="https://www.instagram.com/designerasun/">Instagram</a></button>
                    <button><a href="https://www.tiktok.com/@owltheletterer">TikTok</a></button>
                    <button><a href="https://www.pinterest.com/designerasun/">Pinterest</a></button>
                </div>
            </div>
            <div className="career">
                <div className="career-title">
                    <h3>Freelance Logo Designer</h3>
                    <p>(Nov 2019 ~ Aug 2020)</p>
                </div>
                <ul className="career-text">
                    <li>Self-taught graphic designer</li> 
                    <li>Self-taught calligrapher</li>  
                    <li>Created 100++ typographic logo remakes</li>
                </ul>
                <button><a href="https://www.etsy.com/shop/DesignerAsun">Check Instragram</a></button>
            </div>
        </div>
    </div>
</div>

<div className="intro">
    <div className="intro-title">
            <h2>What is PawCon?</h2>
        </div>
        <div className="logo-img">
            <img src="../img/logo/pawcon-logo.png" 
                loading="lazy"
                alt="logo"/>
        </div>
        <div className="intro-paragraph">
            <p>
                PawCon is a NFT artwork generation service for those who are not familiar with digital art and graphic design. 
            </p>
            <p>
                It targets to provide easy and fun ways to create NFT artwork without any technical/artistic background. 
            </p>
        </div>
    </div>

<div className="middle">
    <div className="middle-title">
        <h2>Why PawCon?</h2>
    </div>
    <div className="middle-paragraph">
        <div className="feature">
            <img src="../img/icon/draw-cat.png" 
                loading="lazy"
                alt="cat icon"/>
            <h3>Premade Templates</h3>
            <p>Pick template and draw on it.</p>
        </div>
        <div className="feature">
            <img src="../img/icon/right-click.png" 
                loading="lazy"
                alt="computer mouser icon"/>
            <h3>One-click Drawing</h3>
            <p>One-click and Your artwork is ready</p>
        </div>
        <div className="feature">
            <img src="../img/icon/camera.png" 
                loading="lazy"
                alt="camera icon"/>
            <h3>One-click Art Filter</h3>
            <p>One-click and Filter your images</p>
        </div>
    </div>
</div>
    </>
  );
}
