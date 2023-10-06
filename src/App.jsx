import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { HighMusicsContainer } from "./Components/Music/MusicsContainer";
import New from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Recommendation from "./Components/RecommendationPage/Recommendation";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app_container">
          <div className="app_navbar">
            <NavbarContainer />
          </div>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/*" element={<New />} />
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":id" element={<ProfileContainer />} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/music" element={<HighMusicsContainer />} />
              <Route path="/friends/*" element={<FriendsContainer />} />
              <Route path="/recommendation" element={<Recommendation/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
