import * as React from 'react';
import { Navbar } from './partials/nav';
import { ImgBanner } from './partials/banner'
import { tempImg } from './gallery'
import { IncreaseToTarget } from './partials/homePartials/counter'
import { Footer } from './partials/footer';
import devBanner from '../assets/img/banner/salute-devs.png'
import creatorBanner from '../assets/img/banner/help-creators.jpg'


export interface HomeProps {
}

export function Home (props:  HomeProps) {
  const abortController = new AbortController()
  // Import counter and use it in useEffect hook. 
  // The useEffect is used to 1) fetching data 2) manipulating DOM in React.
  React.useEffect(()=> {
    const counters = document.querySelectorAll(".counter") as NodeListOf<HTMLParagraphElement>
    IncreaseToTarget( { target : 101, count : 0, speed : 10, display: counters[0]})
    IncreaseToTarget( { target : 501, count : 0, speed : 10, display: counters[1]})
    IncreaseToTarget( { target : 251, count : 0, speed : 10, display: counters[2]})
    
    // cleanup here
    return () => abortController.abort()
  }, [])
  
  return (
    <div>
      <Navbar />
      <main>
      <h1>Best Start For Lazy NFT Creators</h1>
      below image will be changed.
      <ImgBanner img={devBanner}/>

      counter card component here
      <section className="counterContainer">
          <p className='counter'></p>
          <p className='counter'></p>
          <p className='counter'></p>
      </section>

      </main>
      dev banner here
      <ImgBanner img={devBanner}/>
      <Footer />
    </div>
  );
}
