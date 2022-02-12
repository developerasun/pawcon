import * as React from 'react';
import { artworkContext } from '../containers/contextContainer'

export const ArtworkContext = React.createContext(artworkContext)

export interface  ArtworkContextProviderProps {
    children : React.ReactNode
}

export function ArtworkContextProvider (props:  ArtworkContextProviderProps) {
  return (
    <div>
      <ArtworkContext.Provider value={ artworkContext } >
        {props.children}
      </ArtworkContext.Provider>
    </div>
  );
}
