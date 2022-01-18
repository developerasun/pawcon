import * as React from 'react';
import { BasicCardDetailsProps } from '../containers/propContatiner';
import { Button } from '../subComponents/button';

export function InstructionCards ( { description, image } : BasicCardDetailsProps ) 
{
  const shouldHaveButton = true
  return (
    <div className='instructionCardContainer'>
        <img src={image} 
            className='icon'
            alt='instruction card' 
            loading='lazy'/>
        <div className="texts" style={{"width" : "200px"}}>
          <p>{description}</p>
        </div>
        { shouldHaveButton && <Button btnText={"test"}/> }
    </div>
  );
}
