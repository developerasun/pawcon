
// Declare and export style types here
export type SampleStyleProps = {
    style : React.CSSProperties
}

export const GalleryCardsStyle = { 
    'display' : 'flex', 
    'flexFlow':'column nowrap',
    'justifyContent':'center', 
    'alignItems':'center',
    'border' : "2px solid green", 
    'width':'80%', 
    'padding': '1rem',
    'gap': '10'           
}

export const ImgBannerStyle = {
    "width":"50%", 
    "height":"50%"
}