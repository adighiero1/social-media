import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.stockvault.net/data/2010/12/19/116535/thumb16.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ufpT73D18rIAX9IMmEp&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBEkoQw9bv9BC91fPRD7aLTN0Wh45ZHgQZCPD4X7NqvUQ&oe=63FDD026"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Fabi Basterech</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Uruguay</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>InstaBook</span>
              </div>
            </div>
            <button>add me</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
