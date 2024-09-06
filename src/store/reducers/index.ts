import { combineReducers } from "redux";
// import reducers
import users from "./users";
import userInfo from "./userInfo";

const reducers = combineReducers({
    users,
    userInfo,
});

export default reducers;