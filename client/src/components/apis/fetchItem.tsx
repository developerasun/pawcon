import * as React from 'react';

export async function fetchItem ( url : string) {
  const response = await fetch(url)
  const data = await response.json() 
  return data // return Promise
}
