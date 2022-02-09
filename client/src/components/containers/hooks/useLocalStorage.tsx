import * as React from 'react';

// localStorage custom hook => use it for caching purpose 
export function useLocalStorage() {
    const getLocalItem = ( key : string ) => localStorage.getItem(key)
    const setLocalItem = ( key : string, value: string) => localStorage.setItem(key, value)
    const removeOneLocal = ( key : string ) => localStorage.removeItem(key)
    const removeAllLocal = () => localStorage.clear()
    const logAllLocal = () => {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(String(localStorage.key(i))))
        }
    }
  return {
    getLocalItem,
    setLocalItem, 
    removeOneLocal,
    removeAllLocal, 
    logAllLocal
  };
}
