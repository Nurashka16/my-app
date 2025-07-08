import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import HomeAuth from "./Components/Auth/HomeAuth/HomeAuth.jsx";
import AuthPageRouter from "./Components/Auth/AuthPageRouter/AuthPageRouter";
import Layout from "./Components/Layout";

const UsersPageContainer = lazy(() =>
  import("./Components/Users/UsersContainer")
);

const LowMusicsContainer = lazy(() =>
  import("./Components/Music/MusicsContainer")
);
const NewsPage = lazy(() => import("./Components/News/NewsContainer"));
const ProfilePageContainer = lazy(() =>
  import("./Components/ProfilePage/ProfilePageContainer.jsx")
);
const EmptyPage = lazy(() => import("./Components/EmptyPage/EmptyPage"));
const Recommendation = lazy(() =>
  import("./Components/RecommendationPage/Recommendation")
);
const MailPageContainer = lazy(() => import("./Components/Mail/MailContainer"));
const DialogPageContainer = lazy(() =>
  import("./Components/Mail/Dialog/DialogContainer")
);
const NoticePage = lazy(() => import("./Components/NoticePage/NoticePage"));
const CreatePostPage = lazy(() =>
  import("./Components/CreatePostPage/CreatePost")
);

const App = (props) => {
  return (
    <Routes>
      {/*public*/}
      <Route path="auth" element={<HomeAuth />} />
      <Route path="auth/:block" element={<AuthPageRouter />} />
      {/*privet*/}
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/" element={<NewsPage />} />
          <Route path="/profile" element={<ProfilePageContainer />}>
            <Route path=":id" element={<ProfilePageContainer />} />
          </Route>
          <Route
            path="/createPost"
            element={<CreatePostPage />}
          />
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
          <Route path="/mail" element={<MailPageContainer />} />
          <Route path="/dialog/:id" element={<DialogPageContainer />} />
          <Route path="/friends" element={<UsersPageContainer />} />
          <Route path="/musics" element={<LowMusicsContainer />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
