import * as React from 'react';
import { Navbar } from './partials/nav';
import { ImgBanner } from './partials/banner'
import { tempImg } from './gallery'
import { IncreaseToTarget } from './partials/homePartials/counter'

export interface HomeProps {
}

export function Home (props:  HomeProps) {
  const abortController = new AbortController()
  // Import counter and use it in useEffect hook. 
  // The useEffect is used to 1) fetching data 2) manipulating DOM in React.
  React.useEffect(()=> {
    const counters = document.querySelectorAll(".counter") as NodeListOf<HTMLParagraphElement>
    console.log(counters[0])

    IncreaseToTarget( { target : 101, count : 0, speed : 10, display: counters[0]})
    IncreaseToTarget( { target : 501, count : 0, speed : 10, display: counters[1]})
    IncreaseToTarget( { target : 251, count : 0, speed : 10, display: counters[2]})

    // useEffect clean upfunction here
    return () => abortController.abort()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>home route</h1>

      {/* Counter component here */}
      <section className="counterContainer">
          <p className='counter'></p>
          <p className='counter'></p>
          <p className='counter'></p>
      </section>

      <ImgBanner src={tempImg}/>
    </div>
  );
}
