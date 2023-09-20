import "./Profile.css";
import SuggestedAccounts from "./SuggestedAccounts";

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
      <img src={require(`./images/${accountName}-profile.png`)}></img>
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

function ProfileNavbar() {
  const NAVBAR_ITEMS = ["Posts", "Replies", "Media", "Likes"];
  let arr = [];
  NAVBAR_ITEMS.forEach((item) => {
    arr.push(<div key={item}>{item}</div>);
  });

  return <div className="profile-navbar">{arr}</div>;
}

function RepostedPost({
  accountName,
  postOwnerAccountName,
  postOwnerUserName,
  postContent,
  postDate,
  commentNumber,
  likesNumber,
  repostsNumber,
  interactionsNumber,
}) {
  return (
    <div className="reposted-post">
      <div className="repost-header">
        <img src={require("./images/repost.png")}></img>
        {accountName} reposted
      </div>

      <div className="repost-body">
        <div className="repost-owner-img">
          <img src={require(`./images/${postOwnerUserName}.jpg`)} />
        </div>

        <div className="repost-owner-info-content-container">
          <div className="repost-owner-info-more-container">
            <div className="repost-owner-info">
              {postOwnerAccountName}{" "}
              <span>
                @{postOwnerUserName} . {postDate}
              </span>
            </div>
          </div>

          <div className="repost-content">{postContent}</div>

          <div className="post-interactions">
            <div className="post-interactions-item">
              <button>
                <img src={require("./images/comment.png")} />
              </button>
              <p> {commentNumber} </p>
            </div>

            <div className="post-interactions-item">
              <button>
                <img src={require("./images/like.png")} />
              </button>
              <p> {likesNumber} </p>
            </div>

            <div className="post-interactions-item">
              <button>
                <img src={require("./images/repost.png")} />
              </button>
              <p> {repostsNumber} </p>
            </div>

            <div className="post-interactions-item">
              <button>
                <img src={require("./images/insight.png")} />
              </button>
              <p> {interactionsNumber} </p>
            </div>

            <button className="post-interactions-item">
              <img src={require("./images/share.png")} />
            </button>
          </div>
        </div>
        <button>
          <img src={require("./images/more-gray.png")} />
        </button>
      </div>
    </div>
  );
}

export default function Profile() {
  const SUGGESTED_ACCOUNTS = [
    {
      accountName: "freeCodeCamp.org",
      userName: "freeCodeCamp",
      bio: "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn",
      isVerified: true,
    },
    {
      accountName: "TypeScript",
      userName: "typescript",
      bio: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
      isVerified: false,
    },
    {
      accountName: "Tailwind CSS",
      userName: "tailwindcss",
      bio: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
      isVerified: true,
    },
  ];
  return (
    <div className="profile">
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
      <ProfileNavbar />
      <RepostedPost
        accountName="React"
        postOwnerAccountName="danabramov.bsky.social"
        postOwnerUserName="dan_abramov"
        postContent="happy 10th birthday to @reactjs!"
        postDate="May 29"
        commentNumber="46"
        likesNumber="675"
        repostsNumber="3701"
        interactionsNumber="1.1M"
      />
      <SuggestedAccounts
        SUGGESTED_ACCOUNTS={SUGGESTED_ACCOUNTS}
        title="Who to follow"
      />
    </div>
  );
}
