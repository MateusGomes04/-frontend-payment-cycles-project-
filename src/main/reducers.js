import { combineReducers } from "redux";

import dashboarsReducer from "../dashboard/dashboarsReducer";
import tabReducer from "../common/tab/tabReducer";
import billingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
    dashboard: dashboarsReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer