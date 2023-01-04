const initialState = {
    actualPage: "HOME",
}

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_WINDOW":
            return { ...state, actualPage: action.payload }
        case "SET_DATA_NULL":
            return initialState
        default:
            return state
    }
}

export default navigationReducer;