import "./SuggestedAccounts.css";
function SuggestedAccount({ accountName, userName, bio, isVerified }) {
  return (
    <div className="suggested-account-container">
      <div className="suggested-user-img">
        <img src={require(`./images/${userName}.png`)} />
      </div>

      <div className="suggested-account-info">
        <div className="suggested-account-info-header">
          <div className="suggested-account-name">
            <p className="suggested-account-accountname">
              <span>{accountName}</span>
              {isVerified ? (
                <img src={require(`./images/verified.png`)} />
              ) : (
                <></>
              )}
            </p>
            <p className="suggested-account-username">@{userName}</p>
          </div>
          <button className="suggested-account-follow-button">Follow</button>
        </div>
        <div className="suggested-account-bio">{bio}</div>
      </div>
    </div>
  );
}

export default function SuggestedAccounts({ title, SUGGESTED_ACCOUNTS }) {
  const row = [];
  SUGGESTED_ACCOUNTS.forEach((item) => {
    row.push(
      <SuggestedAccount
        accountName={item.accountName}
        userName={item.userName}
        bio={item.bio}
        isVerified={item.isVerified}
        key={item.userName}
      />
    );
  });
  return (
    <div className="who-to-follow-container">
      <p className="who-to-follow-header">{title}</p>
      {row}
      <button className="who-to-follow-show-more">show more</button>
    </div>
  );
}
