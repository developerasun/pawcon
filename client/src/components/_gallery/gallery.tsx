import * as React from 'react'
import './sass/css/gallery.css'
import { v4 as uuidV4 } from 'uuid'
import { GalleryCards } from './galleryCards'
import { ArtworkContext } from '../contexts/artworkContext'
import { ImgBanner } from '../subComponents/banner'
import { IMG_BANNER } from '../containers/imgContainer'
import axios from 'axios'
import { API_URL } from '../apis/api'
import { ArtworkList } from '../apis/useFetch'

// Set initial state for useState/Typescript
const defaultProps :ArtworkList = []

export function Gallery () {
  const artworks =  React.useContext(ArtworkContext);
  const [page, setPage] = React.useState(1)
  const [test, setTest] = React.useState(defaultProps);

  // fetching data
  React.useEffect(()=> {
    const data = fetch(API_URL.artworks)
    data.then((res)=>res.json()).then((result)=> {
      console.log(result)
      setTest(result)
    }).catch((err)=>console.log(err))
    // (async () => {
    //   const response = await fetchArtwork(API_URL.artworks)
    //   console.log(response.data)
    //   setTest(response.data)
    // })()
  }, [ page ])

  return (
    <>
      <main className='galleryMain'>
        <h1>PawCon Gallery</h1>
        ======== slider here ========
        <ImgBanner img={IMG_BANNER.saluteDev} shouldBeGrid={false}/>
        ======== slider here ========
        
        <h2>Weekly Tops</h2>
        <span>Meet coolest paw-oneers</span>
        <span>search bar here</span>
        <div
          className='galleryCardContainer' >
          {artworks.map((item) => {
            return <GalleryCards 
                    key={uuidV4()}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    image={item.image}
                    date={item.date}
                    id={item.id} /> })}
        </div>

        {/* NOT DONE : fetched data test here */}
        <div className="apiTest">
          <p>Fetch data below</p>
            {/* convert fetched data to Array */}
            {Array.from(test).map((item)=>{
              return item.details.identity.author
            })}
        </div>
        
        <div 
          className="galleryCardPagination">
          <button 
            onClick={()=>setPage(Math.max(page - 1, 1))}>&#8249;</button>
          <p>{page}</p>
          <button 
            onClick={()=>setPage(page + 1)}>&#8250;</button>
        </div>

      </main>

    </>
  );
}
