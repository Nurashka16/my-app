import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { MailContainer } from "./Components/Mail/MailContainer";
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
import Dialog from "./Components/Mail/Dialog/Dialog";

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
            <Route path="/emptyPage" element={<EmptyPage />} />
            <Route path="mail" element={<MailContainer />}/>
            <Route path="dialog/:id" element={<Dialog />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/musics" element={<HighMusicsContainer />} />
            <Route path="/friends/*" element={<FriendsContainer />} />
            <Route path="/recommendation" element={<Recommendation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
