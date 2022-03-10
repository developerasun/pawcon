import * as Redux from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { cartReducer, googleLoginReducer, loginReducer } from './reducers';

const middlewares = [thunk, logger]

// key name of root reducer matters
const rootReducer = Redux.combineReducers({
    login : loginReducer, 
    cart : cartReducer, 
    googleLogin : googleLoginReducer
}) 

export const store = createStore(rootReducer, Redux.applyMiddleware(...middlewares))

