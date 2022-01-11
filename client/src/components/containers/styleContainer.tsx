import React from "react"

// Declare and export style types here
export const SampleStyleProps = {
    // style here 
} as React.CSSProperties

export const NavbarStyle = { 
    main : {
        'position' : 'absolute', 
        'right' : '0', 
        'width' : 'fit-content', 
        'height' : '100%' 
    } as React.CSSProperties, 
    toggleBar : {
        toggle : {
            "display" : "block", 
            "cursor" : "pointer", 
            "backgroundColor" : "green",
            "height": '100%',
            "padding": '1rem'
        } as React.CSSProperties, 
        notToggle : {
            "display" : "none", 
            "cursor" : "none"
        } as React.CSSProperties, 
    } 
} 

export const FooterStyle = { 
    'display':'grid',
    'gridTemplateColumns': 'repeat(2, 1fr)',
    'gap': '1rem',
    'padding': '1rem',
    'bottom' : '0', 
    'backgroundColor':'white', 
    'color':'black', 
    'marginTop' : '1rem'
} as React.CSSProperties

export const GalleryCardsStyle = { 
    'display' : 'flex', 
    'flexFlow':'column nowrap',
    'justifyContent':'center', 
    'alignItems':'center',
    'border' : "2px solid green", 
    'padding': '1rem',
    'gap': '10'           
} as React.CSSProperties

export const GalleryCardContainerStyle = {
    "display" : "grid", 
    "gridTemplateColumns":"repeat(2, 1fr)", 
    "gap" : "1rem", 
    "padding" : "1rem"
} as React.CSSProperties

export const GalleryCardPaginationStyle = { 
    "display" : "flex", 
    "flexFlow" : "row nowrap", 
    "gap": "1rem", 
    "padding" : "1rem", 
    "fontSize":"1.5rem", 
} as React.CSSProperties

export const ImgBannerStyle = {
    "width":"100%", 
    "height":"auto"
} as React.CSSProperties