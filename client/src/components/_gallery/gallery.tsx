import * as React from 'react'
import './sass/css/gallery.css'
import { v4 as uuidV4 } from 'uuid'
import { GalleryCards } from './galleryCards'
import { ArtworkContext } from '../contexts/artworkContext'
import { ImgBanner } from '../subComponents/banner'
import { IMG_BANNER } from '../containers/imgContainer'

export function Gallery () {
  const artworks =  React.useContext(ArtworkContext);
  const [page, setPage] = React.useState(1)

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
            {/* {Object.entries(final?)} */}
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
