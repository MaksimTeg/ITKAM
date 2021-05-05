import s from "./article.module.css";
import PostsPageConteiner from "./postspage/postspageConteiner";

import PerofileInfo from "./profile/person";

export default function Article(props) {
  return (
    <div className={s.mainArticle}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuic7S_JXWgKUlJqD46jXkT3LWtOcNCys4bs8eh3Fzi4UJMKnmSjzuv9q5bazxKM3rd2o&usqp=CAU"
        className={s.mainImg}
        alt=""
      />
      <PerofileInfo />
      <PostsPageConteiner store={props.store} />
    </div>
  );
}

//posts={props.profilePage.posts}
//newPostText={props.profilePage.newPostText}
//dispatch={props.dispatch}
