import { combineReducers } from "redux";

import dashboarsReducer from "../dashboard/dashboarsReducer";
import tabReducer from "../common/tab/tabReducer";

const rootReducer = combineReducers({
    dashboard: dashboarsReducer,
    tab: tabReducer
})

export default rootReducer