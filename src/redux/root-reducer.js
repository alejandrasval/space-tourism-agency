import { combineReducers } from "redux";
import { userReducer, destReducer, crewReducer, techReducer } from "./reducer";


const rootReducer = combineReducers({
    user: userReducer,
    dest: destReducer,
    crew: crewReducer,
    tech: techReducer
})

export default rootReducer;