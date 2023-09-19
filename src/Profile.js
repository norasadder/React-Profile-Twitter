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

function ProfileInfo({
  accountName,
  userName,
  bio,
  bioLink,
  joinDate,
  followersNumber,
  followingNumber,
}) {
  return (
    <div className="profile-info-container">
      <div className="name-username-container">
        <div className="name-username">
          <p className="account-name">{accountName}</p>
          <p className="user-name">@{userName}</p>
        </div>
      </div>
      <div className="bio">{bio}</div>
      <div className="link-joined-date-container">
        <div className="bio-link">
          <img src={require(`./images/link.png`)}></img>
          <a href={bioLink}>{bioLink}</a>
        </div>
        <div className="joined-date">
          <img src={require(`./images/calendar.png`)}></img>
          <p>Joined {joinDate}</p>
        </div>
      </div>
      <div className="followers-following">
        <p>
          {followingNumber} <span> Following </span>
        </p>
        <p>
          {followersNumber} <span>Followers</span>
        </p>
      </div>
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
      <ProfileInfo
        accountName="React"
        userName="reactjs"
        bio="The library for web and native user interfaces"
        bioLink="react.dev"
        joinDate="July 2013"
        followingNumber="267"
        followersNumber="708.1K"
      />
    </div>
  );
}
