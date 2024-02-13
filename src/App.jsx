import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { addPost } from "./redux/profile-reducer.js";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import HomeAuth from "./Components/Auth/HomeAuth/HomeAuth.jsx";
import AuthPageRouter from "./Components/Auth/AuthPageRouter/AuthPageRouter";
import Layout from "./Components/Layout";

const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));

const LowMusicsContainer = lazy(() =>
  import("./Components/Music/MusicsContainer")
);
const News = lazy(() => import("./Components/News/NewsContainer"));
const ProfileContainer = lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const EmptyPage = lazy(() => import("./Components/EmptyPage/EmptyPage"));
const Recommendation = lazy(() =>
  import("./Components/RecommendationPage/Recommendation")
);
const MailContainer = lazy(() => import("./Components/Mail/MailContainer"));
const DialogContainer = lazy(() =>
  import("./Components/Mail/Dialog/DialogContainer")
);
const NoticePage = lazy(() => import("./Components/NoticePage/NoticePage"));
const CreatePost = lazy(() => import("./Components/CreatePost/CreatePost"));

const App = (props) => {
  return (
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
          <Route path="/createPost" element={<CreatePost props={addPost} />} />
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
          <Route path="/musics" element={<LowMusicsContainer />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
