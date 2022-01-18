import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IDetailsProps {
}

export function Details (props: IDetailsProps) {
  return (
    <div style={{"fontSize":"2rem"}}>
      {/* Add Outlet component at the end to render child component */}
      <Outlet/>
    </div>
  );
}
