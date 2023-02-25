import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span> Some Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6"></img>
              <span>Fabi Basterech</span>
            </div>

            <div className="buttons">
              <button>add</button>
              <button>remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/240229466_10159414721697380_5255320296088389030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tB2fW4TxJf0AX8YsQF7&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBrA_Oy-f1yDHoJCPz42cbr5PI3tdOdaK5p36b8NgUNlA&oe=63F94FAF"></img>
              <span>Karen Borchet</span>
            </div>

            <div className="buttons">
              <button>add</button>
              <button>remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/240229466_10159414721697380_5255320296088389030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tB2fW4TxJf0AX8YsQF7&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBrA_Oy-f1yDHoJCPz42cbr5PI3tdOdaK5p36b8NgUNlA&oe=63F94FAF"></img>
              <p>
                <span>Karen Borchet </span>
                changed her profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/240229466_10159414721697380_5255320296088389030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tB2fW4TxJf0AX8YsQF7&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBrA_Oy-f1yDHoJCPz42cbr5PI3tdOdaK5p36b8NgUNlA&oe=63F94FAF"></img>
              <p>
                <span>Karen Borchet </span>
                updated her status
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6"></img>
              <p>
                <span>Fabi Basterech </span>
                added a picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6"></img>
              <p>
                <span>Fabi Basterech </span>
                changed her profile picture
              </p>
            </div>
            <span>17 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Friends Online</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6"></img>
              <div className="online"></div>
              <span>Fabi Basterech </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
