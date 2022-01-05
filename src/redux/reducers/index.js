import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { carsReducer } from "./carsReducer";
import { reviewsReducer } from "./reviewsReducer";
import { ordersReducer } from "./ordersReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    carsReducer: carsReducer,
    reviewsReducer: reviewsReducer,
    ordersReducer: ordersReducer
});
export default reducers;