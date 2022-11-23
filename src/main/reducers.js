import { combineReducers } from "redux";

import dashboarsReducer from "../dashboard/dashboarsReducer";


const rootReducer = combineReducers({
    dashboard: dashboarsReducer
})

export default rootReducer