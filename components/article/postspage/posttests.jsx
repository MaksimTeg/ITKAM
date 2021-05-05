import React from "react";
import {
  addPostActionCreator,
  updateNewPostTexCreator
} from "../../../redax/profile_reduser";
import PostsPage from "./postspage";

//export default function PostsPageConteiner(props) {
// let state = props.store.getState();

// let addPost = () => {
// props.store.dispatch(addPostActionCreator());
// };
// let onPostChange = (text) => {
// props.store.dispatch(updateNewPostTexCreator(text));
//};

//  return (
//    <PostsPage
//  updateNewPostTex={onPostChange}
//    addPost={addPost}
//      posts={state.profilePage.posts}
//newPostText={state.profilePage.newPostText}
///>
//);
//}
//posts={props.profilePage.posts}
//       newPostText={props.profilePage.newPostText}
//       dispatch={props.dispatch}
