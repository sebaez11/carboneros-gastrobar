const initialState = {
    dataFood: null,
    foodDetailsVisible: false,
    actualElement: null
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SHOP_DATA":
            return { ...state, dataFood: action.payload }
        case "TOOGLE_FOODDETAILS_WINDOW":
            return { ...state, foodDetailsVisible: !state.foodDetailsVisible, actualElement: (action.payload == null ? null : action.payload) };
        case "SET_DATA_NULL":
            return initialState
        default:
            return state
    }
}

export default shopReducer;