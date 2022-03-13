import * as React from 'react';
import { v4 } from 'uuid';
import { BasicCardDetailsProps } from '../../containers/C_props';
import { Button } from '../../subComponents/button';

export function InstructionCards ( { description, image, hasButton, buttonText, buttonUrl } : BasicCardDetailsProps ) 
{
  return (
    <div id='instructionCardContainer'>
        <img src={image} 
            alt='instruction card' 
            loading='lazy'/>

        {/* if description is long, render it in multi-line */}
        <p>{typeof description === 'string' 
            ? description 
            : description.map((val) => <p key={v4()}>{val}</p>)}</p>
        { hasButton && <Button btnText={buttonText} url={buttonUrl}/> }
    </div>
  );
}
