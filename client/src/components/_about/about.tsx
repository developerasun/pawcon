import * as React from 'react';
import { AboutCardsProps } from '../containers/propContatiner';
import { Footer } from '../subComponents/footer';
import { Navbar } from '../subComponents/navbar';
import './sass/css/about.css'

const AboutCards = ({ date, title, description, image }: AboutCardsProps) => {

}

export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
      <main>
        <h1>About PawCon and Jake Sung</h1> 
        <h2>About PawCon</h2> 
        <h2>About Jake Sung</h2> 
        <div className='test'>sass test</div>
      </main>
  );
}
