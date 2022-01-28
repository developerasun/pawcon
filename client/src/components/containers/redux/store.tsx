import * as Redux from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { cartReducer, loginReducer } from './reducers';

const middlewares = [thunk, logger]

const rootReducer = Redux.combineReducers({
    login : loginReducer, 
    cart : cartReducer
}) 

export const store = createStore(rootReducer, Redux.applyMiddleware(...middlewares))

