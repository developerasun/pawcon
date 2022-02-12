import * as React from 'react'
import './sass/css/gallery.css'
import { v4 as uuidV4 } from 'uuid'
import { GalleryCards } from './galleryCards'
import { ImgBanner } from '../subComponents/banner'
import { IMG_BANNER } from '../containers/imgContainer'
import { ArtworkList } from '../apis/useFetch'
import { API_DEV } from '../containers/apiUrlContainer'


// Set initial state for useState/Typescript
const defaultProps :ArtworkList = []

export function Gallery () {
  const [page, setPage] = React.useState(1)
  const [data, setData] = React.useState(defaultProps);

  React.useEffect(()=> {    
    // fetching data with dynamic route(decided in server side)
    const data = fetch(API_DEV.artworks.baseUrl + `${page}`)
    data.then((res)=>res.json())
        .then((result)=> {
          console.log(result)
          setData(result)
        }).catch((err)=>console.log(err))
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

        <div className="cardContainer">
          {/* convert fetched data to Array */}
          { !data && <p>No gallery items for now..</p>}
          { data && Array.from(data).map((item)=>{
                return <GalleryCards 
                        hasButton={false}
                        key={uuidV4()}
                        title={item.title}
                        description={item.details.identity.description}
                        author={item.details.identity.author}
                        image={item.details.image.url}
                        date={item.details.identity.date}
                        id={uuidV4()} /> })}
        </div>
        
        <div 
          className="pagination">
          <button 
            // fix the hardcoded page later with react-query
            disabled={page<=1}
            onClick={()=>setPage(Math.max(page - 1, 1))}>&#8249;</button>
          <p>{page}</p>
          <button
            // fix the hardcoded page later with react-query
            disabled={page>=3}
            onClick={()=>setPage(page + 1)}>&#8250;</button>
        </div>

      </main>

    </>
  );
}
