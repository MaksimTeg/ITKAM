import store from "../redax/redux-store";
import "/../redax/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//  let rerenderEntireTree = () => {
//rerenderEntireTree();

//store.subscribe(() => {
//  rerenderEntireTree();
//});
//rerenderEntireTree(store.getState());

//store.subscribe(() => {
//  let state = store.getState();
//  rerenderEntireTree(state);
//});

//dispatch={store.dispatch.bind(store)} store={store} />
