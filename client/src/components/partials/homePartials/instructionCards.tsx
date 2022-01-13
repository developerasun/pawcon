import * as React from 'react';
import { BasicCardDetailsProps } from '../../containers/propContatiner';

{/* <ButtonLinks btnText={btnText} url={url} /> */}
// interface ButtonLinksProps { 
//     btnText : string
//     url? : string
// }
// const ButtonLinks = ( { btnText, url } : ButtonLinksProps ) => {
//     return <a href={url} target={"_blank"}><button>{btnText}</button></a> 
// }

// emmet : tsrpfc
export function InstructionCards (
    { description, image }: BasicCardDetailsProps ) 
{
  return (
    <>
        <img src={image} alt='instruction card' loading='lazy'/>
        <p>{description}</p>
    </>
  );
}
