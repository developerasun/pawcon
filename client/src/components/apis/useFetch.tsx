import * as React from 'react';
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

export interface AxiosResponse {
  data: any;
  status: number;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
}
type title = string
type image = {
  width : number
  height : number
  url : string
}
type identity = {
  id : string,
  title : string, 
  description : string,
  author : string,
  date : string
}
type details = { 
  identity : identity, 
  image : image 
}
interface Artwork {
  title : title,
  details : details, 
}

export type ArtworkList = Artwork[]

// NOT TESTED
export async function fetchArtwork (url : string) {
  const response = await axios.get<ArtworkList>(url)
  return response;
}
