import "./SideBar.css";
import SuggestedAccounts from "./SuggestedAccounts";

function SearchBar() {
  return (
    <div className="search-bar">
      <img src={require(`./images/search-gray.png`)} />
      <input type="text" placeholder="Search"></input>
    </div>
  );
}

function TrendItem({ content, postsNumber }) {
  return (
    <div className="trend-item">
      <div className="trend-item-content">{content}</div>
      <div className="trend-item-posts-number">{postsNumber} posts</div>
    </div>
  );
}

function Trends() {
  const TRENDS = [
    { content: "#VALORANTChampions", postsNumber: "27.9K" },
    { content: "#Messi", postsNumber: "77.2K" },
    { content: "fnatic", postsNumber: "8267" },
    { content: "#interMiamiCF", postsNumber: "68.4K" },
    { content: "Mako", postsNumber: "14.1K" },
  ];
  let arr = [];
  TRENDS.forEach((item) => {
    arr.push(
      <TrendItem
        topic={item.topic}
        content={item.content}
        postsNumber={item.postsNumber}
      />
    );
  });

  return (
    <div className="trends-container">
      <p>Trends for you</p>
      {arr}
    </div>
  );
}

export default function SideBar() {
  const SUGGESTED_ACCOUNTS = [
    {
      accountName: "freeCodeCamp.org",
      userName: "freeCodeCamp",
      isVerified: true,
    },
    {
      accountName: "TypeScript",
      userName: "typescript",
      isVerified: false,
    },
    {
      accountName: "Tailwind CSS",
      userName: "tailwindcss",
      isVerified: true,
    },
  ];
  return (
    <div className="side-bar">
      <SearchBar />
      <div className="you-might-like-container">
        <SuggestedAccounts
          SUGGESTED_ACCOUNTS={SUGGESTED_ACCOUNTS}
          title="You might like"
        />
      </div>
      <Trends />
    </div>
  );
}
