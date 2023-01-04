const initialState = {
    isVisible: false,
    shoppingList: []
}

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_OBJECT_TO_SHOPPINGCART":
            var aux = state.shoppingList;
            aux.push(action.payload);
            return { ...state, shoppingList: aux };
        case "TOOGLE_SHOPPINGCART_WINDOW":
            return { ...state, isVisible: !state.isVisible };
        case "SET_DATA_NULL":
            return initialState
        default:
            return state
    }
}

export default shoppingCartReducer;