const initialState = {
    paymentId: null
}

export const payReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAYMENT_ID":
            return { ...state, paymentId: action.payload };
        case "SET_DATA_NULL":
            return initialState
        default:
            return state
    }
}

export default payReducer;