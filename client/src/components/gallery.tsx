import * as React from 'react';
import { Navbar } from './partials/nav';

export interface IGalleryProps {
}

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
        <ul>
            <li></li>
            <ul></ul>
        </ul>
    </main>

    <section>    
        <article className="semantic-article">
            <h3>List of cats you should pat everyday</h3>
            <p>Patting them will make your life sweeter</p>
            <ul>
                <li>Ragdoll</li>
                <li>Siamese</li>
                <li>Sphynx</li>
            </ul>
            <aside>
                <label> Why traveling with cat becomes so popular</label>
                Read article
            </aside>
        </article>
    </section>

    <section className="subscribe">
        <article>
            <h2>Join Today!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, animi?</p>
            <form>
                <input type="email" name="" id="" placeholder="enter your email" required/>
                <button>Submit</button>
            </form>
        </article>
    </section>
    </div>
  );
}
