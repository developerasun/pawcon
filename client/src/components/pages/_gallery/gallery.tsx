import * as React from 'react'
import './sass/css/gallery.css'
import { v4 as uuidV4 } from 'uuid'
import { GalleryCards } from './galleryCards'
import { ImgBanner } from '../../subComponents/banner'
import { ArtworkList } from '../../containers/C_props'
import { API_DEV } from '../../containers/C_apiUrl'

// add status code for backend data fetching.
// fetching condition will prevent unnecessary multiple calls from backend.
enum fetchingStatusCode { 
  notFetching, 
  loading, 
  fetched = 200 // http status code 200
}

// Set initial state for useState/Typescript
const defaultProps :ArtworkList = []

export function Gallery () {
  const [page, setPage] = React.useState(1)
  const [data, setData] = React.useState(defaultProps);
  const [fetchStatus, setFetchStatus] = React.useState<fetchingStatusCode>(0)

  React.useEffect(()=> {    
    // add fetching logic here with Redux thunk 
    // add fetchingStatusCode base on fetch result
    // fetching data with dynamic route(decided in server side)
    const data = fetch(API_DEV.artworks.baseUrl + `${page}`)
    data.then((res)=>{
          if (res.status === 200) return res.json() })
        .then((result)=> {
          console.log(result)
          setFetchStatus(fetchingStatusCode.fetched)
          setData(result)
          // add redux logic here (for card detail rendering)
        })
        .catch((err)=> {
          // logging detailed error object with more context
          console.log({ 
            type : err, 
            url : API_DEV.artworks.baseUrl,
            param : page })
        })
  }, [ page ])

  return (
    <>
      <div className='galleryMain'>
        <h1>PawCon Gallery</h1>
        ======== slider here ========
        <ImgBanner img={'https://i.ibb.co/tbfyGZw/salute-devs.webp'} shouldBeGrid={false}/>
        ======== slider here ========
        
        <h2>Weekly Tops</h2>
        <span>Meet coolest paw-oneers</span>
        <span>search bar here</span>

        <div className="cardContainer">
          {/* FIX : change conditional render based on fetchingStatusCode */}
          { fetchStatus === fetchingStatusCode.notFetching && <p>No gallery items for now..</p> }
          { fetchStatus === fetchingStatusCode.loading && "data fetching ..." }
          { fetchStatus === fetchingStatusCode.fetched 
                && Array.from(data).map((item)=>{
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
            // fix the hardcoded page later
            disabled={page<=1}
            onClick={()=>setPage(Math.max(page - 1, 1))}>&#8249;</button>
          <p>{page}</p>
          <button
            // fix the hardcoded page later
            disabled={page>=3}
            onClick={()=>setPage(page + 1)}>&#8250;</button>
        </div>

      </div>

    </>
  );
}
