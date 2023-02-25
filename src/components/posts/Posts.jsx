import "./posts.scss";
import Post from "../post/Post";
const Posts = () => {
  const posts = [
    // temp data
    {
      id: 1,
      userId: 1,
      name: "Fabi Basterech",
      profilePic:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6",
      desc: "What a great picture! I love it!",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 2,
      userId: 2,
      name: "Fabi Basterech",
      profilePic:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6",
      desc: "What a great picture! I love it!",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 3,
      userId: 1,
      profilePic:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6",
      desc: "What a great picture! I love it!",
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
    {
      id: 4,
      userId: 1,
      profilePic:
        "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/318502138_10160307368887179_6095275533788462039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v53dmSiKPqAAX-sUStw&tn=aznHhTm2kYnKzzil&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBSfCCHFP2CscpvyOq_nZRqf47oirOQlwMGc24-JpV4Vw&oe=63F9DBA6",
      desc: "What a great picture! I love it!",
      name: "Fabi Basterech",
      img: "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332924141_4821900464601929_7393897895725493533_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=5p9WWrYJPgMAX_vMLcC&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfB7arwAGCqcIMAaqIVQGcio9TEG25asTUtKOPrxi0sLJA&oe=63FC6D70",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} /> //passing the post from post component
      ))}
    </div>
  );
};

export default Posts;
