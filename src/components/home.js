import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import Scroll from "./scroll";

function Home() {
  let navigate = useNavigate();
  // let [ScrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   window.removeEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="home">
      <Scroll></Scroll>
      <video width="100%" muted autoPlay loop>
        <source src="video/forest.mp4" type="video/mp4"></source>
      </video>
      <div className="jb-text">
        <h1>Green Table</h1>
        <p>Sincere Energy in Nature</p>
      </div>
      <div className="mainImg">
        <img
          className="mainlogo"
          width="50%"
          height="500px"
          src="img/logo.jpg"
          onClick={() => {
            console.log("눌림");
            navigate("/brandstory");
          }}
        ></img>
        <img width="50%" height="500px" src="img/grain.jpg"></img>
      </div>
      <div className="bottom">
        {/* <h1 style={{ color: "darkgreen" }}>Experience</h1> */}
        <br />
        <br />
        <h1 className="main_text">Expereience</h1>
      </div>

      <div class="grid-image">
        <div class="lb-wrap">
          <div class="lb-text">
            <span>instagram</span>
          </div>
          <div class="lb-image">
            <a href="https://www.instagram.com/our.granola/?utm_medium=copy_link">
              <img width="500px" src="img/cereal5.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="lb-wrap">
          <div class="lb-text">
            <span>YouTube</span>
          </div>
          <div class="lb-image">
            <a href="https://www.youtube.com/c/ORIONworld">
              <img width="500px" src="img/berry.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* <img alt="" src="img/wheat.jpg" />
        <img alt="" src="img/wheat2.jpg" /> */}
      </div>
    </div>
  );
}

// function handleScroll() {
//   let [ScrollY, setScrollY] = useState(0);
//   const scrollTop = document.getElementById("app")?.scrollTop;
//   setScrollY(scrollTop);
// }

export default Home;
