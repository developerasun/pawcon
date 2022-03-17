export const cartReducer = ( state = initialCartItemState, action : CartActionPayload ) => {
    // tip : deliver action.payload consistently in reducer logic
    // varies actual payload value in each component
    switch (action.type) {
        // quantity control
        case INCREASE_QTY : 
            const increasedState = state.map((item) => {
                if (item.title === action.payload && item.quantity < 999){ 
                    item.quantity++
                }
                return item
            })
            return increasedState
        case DECREASE_QTY : 
            const decreasedState = state.map((item) => {
                if (item.title === action.payload && item.quantity > 0) { item.quantity-- }
                return item 
            })
            return decreasedState
        // item control
        case ADD_TO_CART : 
            return [
                ...state, 
                action.payload
            ]
        case REMOVE_FROM_CART : 
            const remainedCart = state.filter((item) => {
                return item.title !== action.payload
            })
            return remainedCart
        // should return initial state for default case
        default : 
            return state
    }
}