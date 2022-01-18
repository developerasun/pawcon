import React, { useEffect } from "react"

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
        param.display.innerText = `${param.count}`
        param.count++
        setTimeout(()=>{ Wrapper(param) }, param.speed)
    }
}
    
const Wrapper = (param : setting) => {
    IncreaseToTarget(param)
}

// NOT FINISHED : Counter component here
// export const Counter = <T extends setting>(adjust : T) => {
//     useEffect(()=>{
//         const counter = document.getElementById("counter") as HTMLElement
//         IncreaseToTarget(
//             {
//                 target : adjust.target,
//                 count : adjust.count, 
//                 speed : adjust.speed, 
//                 display : adjust.display
//             })
//     })
//     return (
        
//         <span id="counter"></span>
        
//     )
// }