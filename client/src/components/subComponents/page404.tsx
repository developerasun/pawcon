import * as React from 'react';
import { ImgBanner } from './banner';

export function Page404 () {
  return (
      <ImgBanner
        hasButton={true}
        buttonText='Back to Home'
        buttonLink='/'
        title='Ooops, no treats here..'
        description={"This page does not exist."}
        imgSrc='https://i.ibb.co/hRwLsFH/page404.webp'
        shouldBeGrid={false} />
  );
}


