import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { MusicsContainer } from "./Components/Music/MusicsContainer";
import New from "./Components/New/New";
import { ProfileContainer2 } from "./Components/Profile/ProfileContainer2";
import ProfileContainer3 from "./Components/Profile/ProfileContainer3";
import { MyProfileCont } from "./Components/Profile/ProfileContainer3";
import { HighProfileContainer } from "./Components/Profile/ProfileContainer2";

/*              <Route path="/user" element={null}/>
*/
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<HighProfileContainer  />}>
              <Route path=":id" element={<HighProfileContainer  />}/>
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<MusicsContainer />} />
            <Route path="/new/:id" element={<New />} />
            <Route path="/friends/*" element={<FriendsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
