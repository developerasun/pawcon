import * as React from 'react';
import { Navbar } from './partials/nav';
import { GalleryCard } from './partials/galleryPartials/card'

export interface IGalleryProps {
}

export const tempImg = "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

export function Gallery (props: IGalleryProps) {
  return (
    <div>
      <Navbar />
      
        <h1>gallery route</h1>
        <article className="counter">
            <h1 className="display" data-target="301">asdf</h1>
            <p>The number of artworks through PawCon!</p>
        </article>

        <main>
            <h1>Hall of Paws</h1>
            <GalleryCard author='Jake' date="2022.01.06" image={tempImg} title='testing'/>
        </main>

    </div>
  );
}
