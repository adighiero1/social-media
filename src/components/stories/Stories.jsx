import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const stories = [
    {
      id: 1,
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 2,
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 3,
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 4,
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
  ];
  return (
    //check stories array

    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic}></img>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(
        (
          story //for each stories create a div
        ) => (
          <div className="story" key={story.id}>
            <img src={story.img}></img>
            <span>{story.name}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Stories;
