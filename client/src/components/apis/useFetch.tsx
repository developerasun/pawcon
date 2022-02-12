import * as React from 'react';
import axios from 'axios'

type title = string
type image = {
  width : number
  height : number
  url : string
}
type identity = {
  title : string, 
  description : string,
  author : string,
  date : string
}
type details = { 
  identity : identity, 
  image : image 
}

export interface Artwork {
  title : title,
  details : details, 
}

export type ArtworkList = Artwork[]

export async function fetchArtwork (url : string) {
  const response = await axios.get<ArtworkList>(url)
  return response;
}
