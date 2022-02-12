import * as React from 'react';
import { useLocalStorage } from '../components/containers/hooks/useLocalStorage';

export function Playground () {
   const { 
    getLocalItem, 
    setLocalItem, 
    logAllLocal, 
    removeAllLocal, 
    removeOneLocal } =  useLocalStorage();
  return (
    <div>
      {getLocalItem("s") ? "exist" : "not exist"}
    </div>
  );
}
