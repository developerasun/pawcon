import * as React from 'react';
import { Creator } from './creator'
import { Wiki } from './wiki'

import './sass/css/about.css'

export function About () {
    // scroll event here
    React.useEffect(()=>{

    }, [])
  return (
    <>
        <Creator />
        <Wiki />
    </>
  );
}
