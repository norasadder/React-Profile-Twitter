import "./App.css";
import Navbar from "./Navbar";
import NewsFeed from "./Profile";
import SideBar from "./SideBar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <NewsFeed />
      <SideBar />
    </div>
  );
}
