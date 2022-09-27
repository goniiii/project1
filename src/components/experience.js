import Scroll from "./scroll";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

function Expereience() {
  let navigate = useNavigate();
  return (
    <div className="Experience">
      <Scroll></Scroll>

      <div className="insta_text">
        <h1>Instagram</h1>
        <p>@green_table </p>
        <p> 아워그래놀라의 다양한 소식을 가장 빠르게 만나보세요.</p>
      </div>
      <div>
        <a href="https://www.instagram.com/our.granola/?utm_medium=copy_link">
          <img
            className="instaImg"
            src="/img/insta1.jpg"
            style={{ marginTop: "21px", margin: "20px", marginLeft: "50px" }}
          ></img>
        </a>
        <a href="https://www.instagram.com/our.granola/?utm_medium=copy_link">
          <img
            className="instaImg"
            src="/img/insta2.jpg"
            style={{ margin: "20px" }}
          ></img>
        </a>
        <a href="https://www.instagram.com/our.granola/?utm_medium=copy_link">
          <img
            className="instaImg"
            src="/img/insta3.jpg"
            style={{ margin: "20px" }}
          ></img>
        </a>
      </div>

      <div className="insta_text">
        <h1>YouTube</h1>
        <p> </p>
        <p> 아워그래놀라의 브랜드영상을 만나보세요.</p>
      </div>
      <div>
        {/* <img
          src="/img/youtube.jpg"
          style={{ margin: "50px" }}
          className="youtubeImg"
        ></img> */}
        <ReactPlayer
          className="player"
          url={"https://www.youtube.com/watch?v=YSevkPcwb3M"}
          width="700px"
          heigth="700px"
          playing={true}
          muted={true}
          controls={true}
        />
      </div>
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
}
export default Expereience;
