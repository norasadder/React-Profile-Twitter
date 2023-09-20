import "./Navbar.css";

//Constants are better to be defined outside of the component
const NAVBAR_ITEMS = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Lists",
  "Bookmarks",
  "Communities",
  "Profile",
  "More",
];

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="list-item">
          <img src={require("../images/X_Logo.jpg")} className="list-item-logo" />
        </li>
        {NAVBAR_ITEMS.map(item => (
          <NavbarItem key={item} name={item} />
        ))}
        <button className="Post_Button">Post</button>
      </ul>
    </div>
  );
}

function NavbarItem({ name }) {
  return (
    <li className="list-item">
      <img src={require(`../images/${name}.png`)} className="list-item-icon" />
      <p>{name}</p>
    </li>
  );
}
