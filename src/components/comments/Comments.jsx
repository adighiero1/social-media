import "./comments.scss";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  // Temporary
  const { currentUser } = useContext(AuthContext);
  const Comments = [
    {
      id: 1,
      desc: "I love this picture!",
      name: "Fabi Basterech",
      profilePicture:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6",
    },
    {
      id: 2,
      desc: "Me too! the Sky looks great!",
      name: "Karen Borchet",
      profilePicture:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/240229466_10159414721697380_5255320296088389030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tB2fW4TxJf0AX8YsQF7&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBrA_Oy-f1yDHoJCPz42cbr5PI3tdOdaK5p36b8NgUNlA&oe=63F94FAF",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic}></img>
        {/*to write a comment. using authContext for current user */}
        <input type="text" placeholder="write a comment here" />
        <button>Post</button>
      </div>
      {Comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture}></img>
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">2 hours ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
