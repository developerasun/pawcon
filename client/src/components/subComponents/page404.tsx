import * as React from 'react';
import { ImgBanner } from './banner';

export function Page404 () {
  return (
      <ImgBanner
        shouldBeGrid={false}
        hasButton={true}
        buttonText='Back to Home'
        buttonLink='/'
        title='Ooops, no treats here..'
        description={"This page does not exist."}
        imgSrc='https://i.ibb.co/RbRD6Fr/page404.png' />
  );
}


