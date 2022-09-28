import Scroll from "./scroll";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

function Expereience() {
  let navigate = useNavigate();
  return (
    <div className="Experience">
      <div className="insta_text">
        <h1>Instagram</h1>
        <p>@our_granola</p>
        <p> 아워그래놀라의 다양한 소식을 가장 빠르게 만나보세요.</p>
      </div>
      <div className="instaLinkImg">
        <a
          href="https://www.instagram.com/our.granola/?utm_medium=copy_link"
          target="_blank"
        >
          <img
            className="instaImg"
            src="/img/insta1.jpg"
            // style={{ marginTop: "21px", margin: "20px", marginLeft: "50px" }}
          ></img>
        </a>
        <a
          href="https://www.instagram.com/our.granola/?utm_medium=copy_link"
          target="_blank"
        >
          <img
            className="instaImg"
            src="/img/insta2.jpg"
            // style={{ margin: "20px" }}
          ></img>
        </a>
        <a
          href="https://www.instagram.com/our.granola/?utm_medium=copy_link"
          target="_blank"
        >
          <img
            className="instaImg"
            src="/img/insta3.jpg"
            // style={{ margin: "20px" }}
          ></img>
        </a>
      </div>

      <div className="insta_text">
        <h1>YouTube</h1>
        <p> </p>
        <p> 아워그래놀라의 브랜드영상을 만나보세요.</p>
      </div>
      <div>
        {}
        {/* react playter 설치한걸로 비디오 삽입 */}

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
