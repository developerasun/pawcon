
// Declare and export style types here
export type SampleStyleProps = {
    style : React.CSSProperties
}

export const NavbarStyle = {
    navigation : { 
        toggled : {
            "backgroundColor" : "green"
        }, 
        notToggled : { 
            "fontWeight" : "bold"
        }
    }, 
    menu : { 
        toggled : {
            "display" : "block"
        }, 
        notToggled: { 
            "display" : "none"
        }
    }
}

export const GalleryCardStyle = { 
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