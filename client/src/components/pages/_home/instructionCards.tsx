import * as React from 'react';
import { v4 } from 'uuid';
import { BasicCardDetailsProps } from '../../containers/C_props';
import { Button } from '../../subComponents/button';

export function InstructionCards ( { 
  title, description, image, 
  hasButton, buttonText, buttonUrl 
} : BasicCardDetailsProps ) 
{
  return (
    <div id='instructionCard'>
      <img src={image} 
          alt='instruction card' 
          loading='lazy'/>
      <div className="texts">
        <span id='instructionCardTitle'>{title}</span>
        <p>{description}</p>
      </div>
      { hasButton && <Button btnText={buttonText} url={buttonUrl} /> }
    </div>
  );
}
