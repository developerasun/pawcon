import * as React from 'react';

// Declare and export component type here
export type SampleProps = {
    name : string
}

export type ProfileProps = {
    name : string
    email : string
    isLoggedIn : boolean 
}

export type GalleryCardsProps = {
    title : string
    author : string
    date : string
    image : string
    id : string
}