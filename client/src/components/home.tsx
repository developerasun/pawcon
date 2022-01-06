import * as React from 'react';
import { Navbar } from './partials/nav';
import { ImgBanner } from './partials/banner'
import { tempImg } from './gallery'
export interface HomeProps {
}

export function Home (props:  HomeProps) {
  return (
    <div>
      <Navbar />
      <h1>home route</h1>

      <section className="counterContainer">
          <p className='count'>first count here</p>
          <p className='count'>second count here</p>
          <p className='count'>third count here</p>
      </section>

      <ImgBanner src={tempImg}/>
    </div>
  );
}
