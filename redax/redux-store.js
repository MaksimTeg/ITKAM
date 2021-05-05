import profileReduser from "./profile_reduser";
import sidebarReduser from "./sidebar-reduser";
import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogReducer,
  subscribe: sidebarReduser,
  usersPage: usersReducer
});
let store = createStore(redusers);
window.store = store;
export default store;
