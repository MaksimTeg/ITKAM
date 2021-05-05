import { Route } from "react-router";
import Article from "../components/article/article";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Music from "../components/music/music";
import Nav from "../components/nav/nav";
import News from "../components/news/news";
import SettingsPage from "../components/settingspage/settingspage";
import UsersContainer from "../components/UsersPage/UsersContainer";
import "./styles.css";
let SomeConstruct = () => <News />;
let SomeConstructS = () => <SettingsPage />;

export default function App(props) {
  return (
    <div className="app_wrapper">
      <div className="wrapper_Header">
        <Header />
      </div>
      <div className="wrapper_Nav">
        <Nav />
      </div>
      <div className="wrapper_Dialogs">
        <Route path="/article" render={() => <Article />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" component={SomeConstruct} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/Users" render={() => <UsersContainer />} />
        <Route path="/settings" component={SomeConstructS} />
      </div>
      <div className="wrapper_Footer">
        <Footer />
      </div>
    </div>
  );
}
