import * as React from 'react';
import { Navbar } from './partials/nav';
import { fetchItem } from './apis/fetchItem' 
import { GalleryCards } from './partials/galleryPartials/galleryCards'
import { IncreaseToTarget } from './partials/homePartials/counter'

// Presume backend data here
export const artworks = [ 
  {id : 1, title: "Fresh loaf chunk", author:"Jake", date:"2021.10.10" },
  {id : 2, title: "Wildness", author:"Elly", date:"2017.06.30" },
  {id : 3, title: "Goodbye World", author:"Smith", date:"2020.10.07" },
  {id : 4, title: "Cat next door", author:"Brian", date:"2019.07.24" },
  {id : 5, title: "Best paw", author:"Paul", date:"2015.02.22" },
]

export interface IGalleryProps {
}

export const tempImg = "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

export function Gallery (props: IGalleryProps) {

  const [trigger, setTrigger] = React.useState<boolean>(false) // button status
  const [testData, setTestData] = React.useState<string>("") // fetched data
  const abortController = new AbortController() // for useEffect cleanup 

  const handleClick = () => { setTrigger(!trigger) } // button click handler

  React.useEffect( ()=> {

    // counter
    const counter = document.querySelector(".counter") as HTMLParagraphElement
    IncreaseToTarget( { target : 201, count : 0, speed : 10, display: counter})

    // fetch data if button clicked
    if (trigger) {
      // IIFE : asynchronous anonymous function
      (async ()=> {
        const data = await fetchItem( "https://jsonplaceholder.typicode.com/users/1", abortController)
        console.log("thisis : ", data)
        setTestData(`Welcome back, ${data.name}`)
      })()
    }

    // execute clean up function
    return () => abortController.abort()
  }, [trigger]) // dependency

  return (
    <div>
      <Navbar />
    
        <h2>gallery route</h2>

        <article className="counterContainer">
            <h3>The number of artworks made with PawCon!</h3>
            <p className="counter"></p>
        </article>

        <button onClick={handleClick}>Get Data</button>
        <p>fetched data : {testData}</p>

        <main>
            <h1>Weekly Tops</h1>

            {/* map items to render gallery cards  */}
            {/* <GalleryCards author='Jake' date="2022.01.06" image={tempImg} title='testing'/> */}
        </main>

    </div>
  );
}
