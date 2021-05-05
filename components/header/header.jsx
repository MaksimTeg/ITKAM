import s from "./header.module.css";

export default function Header() {
  return (
    <div className={s.pageHeader}>
      <img src="https://www.logodesign.net/images/illustration-logo.png" />
      <span>Header</span>
    </div>
  );
}
