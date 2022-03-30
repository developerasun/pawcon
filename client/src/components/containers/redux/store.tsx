import * as Redux from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { cartReducer, fetchArtworkReducer, googleLoginReducer, loginReducer } from './reducers';

const middlewares = [thunk, logger]

// key name of root reducer matters
const rootReducer = Redux.combineReducers({
    login : loginReducer, 
    cart : cartReducer, 
    googleLogin : googleLoginReducer, 
    artwork : fetchArtworkReducer
}) 

export const store = createStore(rootReducer, Redux.applyMiddleware(...middlewares))

// TO DO : store subscription for persistant login
const persistJwtLogin = () => localStorage.setItem("jwt", JSON.stringify(store.getState().login))
const persistGoogleLogin = () => localStorage.setItem("google", JSON.stringify(store.getState().googleLogin))

store.subscribe(persistGoogleLogin)
store.subscribe(persistJwtLogin)