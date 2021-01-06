import counterReducer from "./counter";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    data: dataReducer,
})

export default allReducers;