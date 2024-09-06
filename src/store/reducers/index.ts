import { combineReducers } from "redux";
// import reducers
import users from "./users";
import events from "./events";
import userInfo from "./userInfo";

const reducers = combineReducers({
    users,
    events,
    userInfo,
});

export default reducers;