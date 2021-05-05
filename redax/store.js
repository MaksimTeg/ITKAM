import dialogReducer from "./dialogs-reducer";
import profileReduser from "./profile_reduser";
import sudebarReduser from "./sidebar-reduser";
import UsersReduser from "./users-reduser";

let store = {
  getState() {
    return this._state;
  },
  _rerenderEntireObserver() {
    console.log("State Changed");
  },

  subscribe(observer) {
    this._rerenderEntireObserver = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.subscribe = sudebarReduser(this._state.subscribe, action);
    this._state.usersPage = UsersReduser(this._state.usersPage, action);

    this._rerenderEntireObserver(this._state);
  }
};

export default store;
window.store = store;
