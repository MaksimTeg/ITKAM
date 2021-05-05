import s from "./person.module.css";

export default function PerofileInfo() {
  return (
    <div className={s.person}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCYPsZTJJfWKYwT69I2rj6HjvGk2ctvPdwA&usqp=CAU"
        className={s.mainAvatar}
        alt=""
      />
      <div>Article</div>
    </div>
  );
}
