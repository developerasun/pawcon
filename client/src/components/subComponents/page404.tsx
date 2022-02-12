import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IPage404Props {
}

export function Page404 (props: IPage404Props) {
  return (
    <>
      <h1>Ooops, no treats here..</h1>
      <section>
        <span>slider image 1</span>
        <span>slider image 2</span>
        <span>slider image 3</span>
        <span>slider image 4</span>
        <span>slider image 5</span>
      </section>
      <Link to={'/'}>Back to Home</Link>
    </>
  );
}


