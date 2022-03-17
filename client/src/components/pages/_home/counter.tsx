import * as React from 'react';

import { BasicCardDetailsProps } from '../../containers/C_props'
// set start/end points 
interface setting {
    target : number
    count : number 
    speed : number
    display : HTMLElement
}

// increase value i to 100 
// reflect the i in html
// stop if i reaches 100
export const IncreaseToTarget = (param: setting):void => {
    if (param.count < param.target) { 
        param.display.innerText = `${param.count}+`
        param.count++
        setTimeout(()=>{ Wrapper(param) }, param.speed)
    }
}
    
const Wrapper = (param : setting) => {
    IncreaseToTarget(param)
}

export const CounterCard = ({ 
    description
} : BasicCardDetailsProps) => {
    React.useEffect(()=> {
        const counters = document.getElementsByClassName("counter") as HTMLCollectionOf<HTMLSpanElement>

        // convert to Array to get HTMLElement(having innerText attribute)
        const spans = Array.from(counters).map((val)=> {
            return val
        })
        
        IncreaseToTarget( { target : 100, count : 0, speed : 30, display: spans[0]}) // user
        IncreaseToTarget( { target : 200, count : 0, speed : 20, display: spans[1]}) // contributor
        IncreaseToTarget( { target : 300, count : 0, speed : 10, display: spans[2]}) // github star
    }, [])
    return (
        <div id="counterCard">
            <span className='counter'></span>
            <span>{description}</span>
        </div>
    )
}