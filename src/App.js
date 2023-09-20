import "./App.css";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import SideBar from "./sidebar/SideBar";

export default function App() {
  return (
    <div className="background-container">
      <div className="app">
        <Navbar />
        <Profile />
        <SideBar />
      </div>
    </div>
  );
}
