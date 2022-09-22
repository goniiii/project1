import { Button, Link } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <video width="100%" muted autoPlay loop>
        <source src="video/forest.mp4" type="video/mp4"></source>
      </video>
      <div className="jb-text">
        <h1>Green Table</h1>
        <p>Sincere Energy in Nature</p>
      </div>
      <div>
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
        <h2>Expereience</h2>
        {/* <img width="140px" src="img/instagram.jpg"></img>
        <a href="https://www.instagram.com/" variant="success">
          Instagram
        </a> */}
      </div>
      {/* <div class="user-wrap">
        <img
          className="mainImg1"
          width="50%"
          height="500px"
          src="img/wheat.jpg"
          onClick={() => {}}
        ></img>
        <img
          className="mainImg2"
          width="50%"
          height="500px"
          src="img/wheat2.jpg"
          onClick={() => {}}
        ></img>
      </div> */}
      <div class="lb-wrap">
        <div class="lb-text">
          <h1 style={{ color: "white" }}>instagram</h1>
        </div>
        <div class="lb-image">
          <img width="500px" src="img/wheat.jpg" alt="" />
        </div>
      </div>
      <div class="lb-wrap">
        <div class="lb-text">
          <h1 style={{ color: "white" }}>YouTube</h1>
        </div>
        <div class="lb-image">
          <img width="500px" src="img/wheat2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
