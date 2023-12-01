import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { HighMusicsContainer } from "./Components/Music/MusicsContainer";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Recommendation from "./Components/RecommendationPage/Recommendation";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import HomeAuth from "./Components/Auth/HomeAuth/HomeAuth";
import AuthPageRouter from "./Components/Auth/AuthPageRouter/AuthPageRouter";
import Layout from "./Components/Layout";
import EmptyPage from "./Components/EmptyPage/EmptyPage";
import MailContainer from "./Components/Mail/MailContainer";
import DialogContainer from "./Components/Mail/Dialog/DialogContainer";
import NoticePage from "./Components/NoticePage/NoticePage";
import CreatePost from "./Components/CreatePost/CreatePost";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/*public*/}
        <Route path="auth" element={<HomeAuth />} />
        <Route path="auth/:block" element={<AuthPageRouter />} />
        {/*privet*/}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/" element={<News />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":id" element={<ProfileContainer />} />
            </Route>
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/communities" element={<EmptyPage />} />
            <Route path="/photos" element={<EmptyPage />} />
            <Route path="/videos" element={<EmptyPage />} />
            <Route path="/clips" element={<EmptyPage />} />
            <Route path="/services" element={<EmptyPage />} />
            <Route path="/games" element={<EmptyPage />} />
            <Route path="/bookmarks" element={<EmptyPage />} />
            <Route path="/files" element={<EmptyPage />} />
            <Route path="/ad" element={<EmptyPage />} />
            <Route path="/market" element={<EmptyPage />} />
            <Route path="/reaction" element={<EmptyPage />} />
            <Route path="/search" element={<EmptyPage />} />
            <Route path="/mail" element={<MailContainer />} />
            <Route path="/dialog/:id" element={<DialogContainer />} />
            <Route path="/friends" element={<UsersContainer />} />
            <Route path="/musics" element={<HighMusicsContainer />} />
            <Route path="/*" element={<FriendsContainer />} />
            <Route path="/recommendation" element={<Recommendation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
