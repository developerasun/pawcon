import * as React from 'react'
import { Navbar } from '../subComponents/navbar'
import { Footer } from '../subComponents/footer'
import { GalleryCards } from './galleryCards'
import { GalleryCardContainerStyle, GalleryCardPaginationStyle } from '../containers/styleContainer'

// Presume backend data here
export const tempImg = "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
export const artworks = [ 
  {id : 1, title: "Fresh loaf chunk", description : "very cool", author:"Jake", date:"2021.10.10", image : tempImg},
  {id : 2, title: "wow hello", description : "very hot", author:"Jake", date:"2011.03.22", image : tempImg},
  {id : 3, title: "duumy", description : "very asdf", author:"Jake", date:"2015.09.22", image : tempImg},
  {id : 4, title: "itarasdf", description : "ddodood", author:"Jake", date:"2033.02.16", image : tempImg},
  {id : 5, title: "loerem", description : "66565", author:"Jake", date:"2000.10.10", image : tempImg},
]

export function Gallery () {
  const [page, setPage] = React.useState(1)
  return (
    <>
      <Navbar />
      <main style={{"display" : "flex", "flexFlow": "column nowrap", "justifyContent": "center", "alignItems":"center"}}>
        <h1>Weekly Tops on PawCon</h1>
        <div
          className='galleryCardContainer' 
          style={GalleryCardContainerStyle}>
          {artworks.map((item) => {
            return <GalleryCards 
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    image={item.image}
                    date={item.date}
                    id={item.id} /> })}
        </div>

        <div 
          className="galleryCardPagination"
          style={GalleryCardPaginationStyle}>
          <button 
            style={{"fontSize" : "1.5rem", "padding":"0 0.2rem"}}
            onClick={()=>setPage(Math.max(page - 1, 1))}>&#8249;</button>
          <p>{page}</p>
          <button 
            style={{"fontSize" : "1.5rem", "padding":"0 0.2rem"}}
            onClick={()=>setPage(page + 1)}>&#8250;</button>
        </div>

      </main>
      <Footer />
    </>
  );
}
