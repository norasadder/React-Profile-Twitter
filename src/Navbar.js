import "./Navbar.css";

export default function Navbar() {
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
  let listItems = [];
  NAVBAR_ITEMS.forEach((element) => {
    listItems.push(<NavbarItem key={element} name={element} />);
  });
  return (
    <div className="navbar">
      <logo />
      <ul>
        <li className="list-item">
          <img
            src={require("./images/X_Logo.jpg")}
            className="list-item-logo"
          />
        </li>
        {listItems}
        <button className="Post_Button">Post</button>
      </ul>
    </div>
  );
}

function NavbarItem({ name }) {
  return (
    <li className="list-item">
      <img src={require(`./images/${name}.png`)} className="list-item-icon" />
      <p>{name}</p>
    </li>
  );
}
