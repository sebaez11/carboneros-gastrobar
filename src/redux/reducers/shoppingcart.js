const initialState = {
    isVisible: false,
    shoppingList: []
}

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_OBJECT_TO_SHOPPINGCART":
            var aux = state.shoppingList;
            var aux2 = state.shoppingList.findIndex(item => item.nombre === action.payload.nombre);
            if(action.payload.action==="ADD"){
                if (aux2 !== -1) {
                    aux[aux2].units=aux[aux2].units+1;
                } else {
                    aux.push(action.payload);
                }
            }else{
                if (aux[aux2].units===1) {
                    aux.splice(aux2,1);
                } else {
                    aux[aux2].units=aux[aux2].units-1;
                }
            }
            return { ...state, shoppingList: aux };
        case "REMOVE_OBJECT_TO_SHOPPINGCART":
            var aux= state.shoppingList;
            var aux2=state.shoppingList.findIndex(item => item.nombre === action.payload.nombre);
            aux.splice(aux2,1);
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