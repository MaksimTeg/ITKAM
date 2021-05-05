import s from "./post.module.css";

export default function Post(props) {
  return (
    <div className={s.postComment}>
      <img
        src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/2:2/w_746,h_746,c_limit/Barasch-Avatar.jpg"
        className={s.commentAvatar}
        alt=""
      />
      {props.message}
      <div>
        <button>Like</button>
        {props.likeCount}
      </div>
    </div>
  );
}
