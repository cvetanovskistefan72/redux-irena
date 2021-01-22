import { combineReducers } from "redux";
import { booksReducer } from "./reducers/booksReducer";
import { filtersReducer } from "./reducers/filtersReducer";

export const rootReducer = combineReducers({
    filters:filtersReducer,
    books:booksReducer
})