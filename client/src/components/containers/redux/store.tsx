import * as Redux from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer, loginReducer } from './reducers';

const rootReducer = Redux.combineReducers({
    login : loginReducer, 
    cart : cartReducer
}) 

export const store = createStore(rootReducer, Redux.applyMiddleware(thunk))

