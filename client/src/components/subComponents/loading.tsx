import * as React from 'react';

export interface ILoadingProps {
}

export function Loading (props: ILoadingProps) {
  React.useEffect(()=>{

    window.addEventListener("load", ()=>{
      console.log("loading ...")
    })
  }, [])
  return (
    <div>
      loading animation here
    </div>
  );
}
