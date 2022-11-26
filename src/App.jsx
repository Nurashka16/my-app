import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
