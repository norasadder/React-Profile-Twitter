import "./App.css";
import Navbar from "./Navbar";
import Profile from "./Profile";
import SideBar from "./SideBar";

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
