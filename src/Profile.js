import "./Profile.css";

function ProfileHeader({ accountName, postsNumber }) {
  return (
    <div className="profile-header">
      <button className="back-button">
        <img src={require("./images/back.png")}></img>
      </button>
      <div className="profile-info">
        <p className="account-name">{accountName}</p>
        <p className="posts-number">{postsNumber} Posts</p>
      </div>
    </div>
  );
}

function CoverPicture({ accountName }) {
  return (
    <div className="cover-picture">
      <img src={require(`./images/${accountName}-cover.jpeg`)}></img>
    </div>
  );
}

function ProfilePicture({ accountName }) {
  return (
    <div className="profile-picture">
      <img src={require(`./images/React-profile.png`)}></img>
    </div>
  );
}

function ProfileButtons() {
  return (
    <div className="profile-buttons">
      <button className="rounded-button">
        <img src={require(`./images/More2.png`)} />
      </button>
      <button className="rounded-button">
        <img src={require(`./images/Notify.png`)} />
      </button>
      <button className="oval-button">Following</button>
    </div>
  );
}

export default function NewsFeed() {
  return (
    <div className="news-feed">
      <ProfileHeader accountName="React" postsNumber="2611" />
      <CoverPicture accountName="React" />
      <div className="profile-pic-buttons-container">
        <ProfilePicture accountName="React" />
        <ProfileButtons />
      </div>
    </div>
  );
}
