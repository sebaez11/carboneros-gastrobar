import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import homeReducer from "../reducers/home";
import navigationReducer from "../reducers/navigation";
import shoppingCartReducer from "../reducers/shoppingcart";
import shopReducer from "../reducers/shop";
const store = createStore(
    combineReducers({
        home: homeReducer,
        navigation: navigationReducer,
        shoppingCart: shoppingCartReducer,
        shop: shopReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;