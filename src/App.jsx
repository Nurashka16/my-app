import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { FriendsContainer } from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { HighMusicsContainer } from "./Components/Music/MusicsContainer";
import New from "./Components/New/New";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import ProfileContainerTest from "./Components/ProfileTest/ProfileContainerTest";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app_container">
          <div className="app_navbar">
            <Navbar />
          </div>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/" element={<New />} />
              <Route path="/profile" element={<ProfileContainerTest />}>
                <Route path=":id" element={<ProfileContainerTest />} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/music" element={<HighMusicsContainer />} />
              <Route path="/friends/*" element={<FriendsContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
