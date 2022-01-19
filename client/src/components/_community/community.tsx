import * as React from 'react';
import { Navbar } from '../subComponents/navbar';
import { BlogList } from './blogList';
import { BlogForm } from './blogForm';

export interface  CommunityProps {
}

export function Community (props:  CommunityProps) {
  return (
    <div>
      <h1>community route</h1>
      <BlogList />
      <BlogForm />
    </div>
  );
}
