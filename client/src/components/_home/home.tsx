import * as React from 'react'
import { v4 as uuidV4 } from 'uuid'
import './sass/css/home.css'
import { ImgBanner, VideoBanner } from '../subComponents/banner'

import { IncreaseToTarget } from './counter'
import { InstructionCards } from './instructionCards'

// images
import { IMG_INSTRUCTION, IMG_BANNER } from '../containers/imgContainer'

export function Home () {

  React.useEffect(()=> {
    const abortController = new AbortController()
    const counter = document.getElementById("counter") as HTMLElement
    IncreaseToTarget( { target : 100, count : 0, speed : 10, display: counter})
    
    // cleanup here
    return () => abortController.abort()
  }, [])
  
  return (
    <div>

      <div>
        <h1>Best Start For Lazy NFT Creators</h1>
        <ImgBanner img={IMG_BANNER.helpCreator} 
                  title={"We help creators"}
                  description={"Spread your artistic talent and Make them NFTs"}/>

          <section>
            <div className="pawconUserCount">
              <span>icon here</span>
              <h3># PawCon Users So Far</h3>
              <span id='counter'></span>
            </div>
            {/* add more counters */}
          </section>

        {IMG_INSTRUCTION.map((item) =>{
          return <InstructionCards 
                    key={uuidV4()}
                    description={item.description} 
                    image={item.image} /> 
        })}
      </div>

      <VideoBanner 
        title='Meet PawCon' 
        buttonText='Explore Gallery' 
        linkTo='/gallery'/>

      <ImgBanner img={IMG_BANNER.saluteDev}/>

    </div>
  );
}
