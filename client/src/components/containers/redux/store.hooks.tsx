import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { googleLoginStateProps, initialLoginStateProps } from './initialStates';
import { oneArtwork, Product } from '../C_props';
import { store } from './store';

// Define RootState : 1) Login 2) User 3) Product
// Use this RootState for useSelector hook. 
// Method 1 : property name should be the same with reducer name.
export interface RootState  {
    login : initialLoginStateProps
    cart : Product[]
    googleLogin : googleLoginStateProps
    artwork : oneArtwork
}

// method 2
// export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

// type casting for redux selector & dispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()