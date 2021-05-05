import React from "react";
import s from "./postspage.module.css";
import Post from "./post/post";

export default function PostsPage(props) {
  let postElement = props.posts.map((newPost) => (
    <Post
      message={newPost.message}
      likeCount={newPost.likeCount}
      key={newPost.id}
    />
  ));

  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTex(text);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          placeholder="Enter your text"
          className={s.textarea}
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div className={s.buttonItem}>
        <button onClick={addPostClick} className={s.button}>
          Add post
        </button>
      </div>
      <div>{postElement}</div>
    </div>
  );
}
