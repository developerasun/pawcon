import * as React from 'react'
import './sass/css/home.css'
import { ImgBanner, VideoBanner } from '../subComponents/banner'
import { CounterCard } from './counter'
import { InstructionCards } from './instructionCards'

// images
import { IMG_BANNER } from '../containers/imgContainer'

export function Home () {
  return (
    <div id='home'>
      <div>
        <h1>Best Start For Lazy NFT Creators</h1>
        <ImgBanner 
          shouldBeGrid={true}
          img={IMG_BANNER.helpCreator} 
          title={"We help creators"}
          description={"Spread your artistic talent and Make them NFTs"}/>

          <section id='counterContainer'>
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/DfG593X/pawcon-user.png'
              description={'Users'} />
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/JsRx70X/pawcon-contributor.png'
              description={'Contributors'} />
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/6RCtZJG/pawcon-star.png'
              description={'Github stars'} />
          </section>
      </div>

      <div id="instructionCards">
        <InstructionCards 
          hasButton={false}
          description={`Create Your NFTs With Ease.`}
          image={'https://i.ibb.co/5RMVbRS/woman-drawing.webp'}
        />
        <InstructionCards 
          hasButton={false}
          description={["Save It To Wallet.", "Protect the asset safely."]}
          image={'https://i.ibb.co/TMtMV0S/phone-money.webp'}
        />
        <InstructionCards 
          description={["List It In Marketplace.", "Do Marketing And Make Sales."]}
          image={'https://i.ibb.co/FsRQLdR/paper-bag.webp'}
          hasButton={true}
          buttonText={'Explore'}
        />
        <InstructionCards 
          description={["Donate And Support.", "Buy Me A Coffee."]}
          image={'https://i.ibb.co/cTtgkpg/star-box.webp'}
          hasButton={true}
          buttonText={'Donate'}
        />
      </div>

      <VideoBanner 
        title='Meet PawCon' 
        buttonText='Explore Gallery' 
        linkTo='/gallery'/>

      <ImgBanner 
        shouldBeGrid={false}
        img={IMG_BANNER.saluteDev}/>

    </div>
  );
}
