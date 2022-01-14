import * as React from 'react'
import { v4 as uuidV4 } from 'uuid'
import { Navbar } from '../subComponents/navbar'
import { Footer } from '../subComponents/footer'
import { ImgBanner } from '../subComponents/banner'

import { IncreaseToTarget } from './counter'
import { InstructionCards } from './instructionCards'

// images
import { IMG_INSTRUCTION, IMG_BANNER } from '../containers/imgContainer'

export function Home () {
  const abortController = new AbortController()
  React.useEffect(()=> {
    const counters = document.querySelectorAll(".counter") as NodeListOf<HTMLParagraphElement>
    IncreaseToTarget( { target : 101, count : 0, speed : 10, display: counters[0]})
    IncreaseToTarget( { target : 501, count : 0, speed : 10, display: counters[1]})
    IncreaseToTarget( { target : 251, count : 0, speed : 10, display: counters[2]})
    
    // cleanup here
    return () => abortController.abort()
  }, [])
  
  return (
    <>
      <Navbar />
      <main>
      <h1>Best Start For Lazy NFT Creators</h1>
      below image will be changed.
      <ImgBanner img={IMG_BANNER.helpCreator} 
                title={"We help creators"}
                description={"Spread your artistic talent and Make them NFTs"}/>

      counter card component here
      <section className="counterContainer">
          <p className='counter'></p>
          <p className='counter'></p>
          <p className='counter'></p>
      </section>

      {IMG_INSTRUCTION.map((item) =>{
        return <InstructionCards 
                  key={uuidV4()}
                  description={item.description} 
                  image={item.image} /> 
      })}

      </main>

      <ImgBanner img={IMG_BANNER.saluteDev}/>
      <Footer />
    </>
  );
}
