import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTexCreator
} from "../../../redax/profile_reduser";
import PostsPage from "./postspage";

let mapAddPost = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};
let mapOnPostChange = (dispatch) => {
  return {
    updateNewPostTex: (text) => {
      let action = updateNewPostTexCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};
const PostsPageConteiner = connect(mapAddPost, mapOnPostChange)(PostsPage);

export default PostsPageConteiner;

//posts={props.profilePage.posts}
//       newPostText={props.profilePage.newPostText}
//       dispatch={props.dispatch}

//export default function PostsPageConteiner(props) {
//  let state = props.store.getState();

//  let addPost = () => {
//    props.store.dispatch(addPostActionCreator());
//  };
//  let onPostChange = (text) => {
//    props.store.dispatch(updateNewPostTexCreator(text));
//  };

// return (
//  <PostsPage
// updateNewPostTex={onPostChange}
//  addPost={addPost}
//  posts={state.profilePage.posts}
//    newPostText={state.profilePage.newPostText}
// />
//  );
//}
