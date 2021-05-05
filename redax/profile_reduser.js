const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 0 },
    { id: 3, message: "BlaBla", likeCount: 10 },
    { id: 4, message: "Hi", likeCount: 1 }
  ],
  newPostText: ""
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTexCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export default profileReduser;
