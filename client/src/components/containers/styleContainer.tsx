import React from "react"

// Declare and export style types here
export const SampleStyleProps = {
    // style here 
} as React.CSSProperties

export const NavbarStyle = { 
    main : {
        'position' : 'fixed', 
        'right' : '0', 
        'width' : 'fit-content', 
        'height' : '100vh' 
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

export const ImgBannerStyle = {
    "maxWidth":"100%", 
    "height":"auto"
} as React.CSSProperties