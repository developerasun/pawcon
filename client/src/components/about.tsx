import * as React from 'react';
import { AboutCardsProps } from './containers/propContatiner';
import { Footer } from './partials/footer';
import { Navbar } from './partials/nav';

const AboutCards = ({ date, title, description, image }: AboutCardsProps) => {

}

export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <div>
      <Navbar />
      <main>
        <h1>About PawCon and Jake Sung</h1> 
        <h2>About PawCon</h2> 
        <h2>About Jake Sung</h2> 
        
      </main>
      <Footer />
    </div>
  );
}
