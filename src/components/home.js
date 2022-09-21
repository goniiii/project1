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
        <img width="50%" height="500px" src="img/salad2.jpg"></img>
      </div>
      <div className="bottom">
        {/* <h1 style={{ color: "darkgreen" }}>Experience</h1> */}
        <br />
        <br />
        <a href="https://www.instagram.com/" variant="success">
          Instagram
        </a>
      </div>
      <div class="user-wrap">
        <img
          className="mainImg1"
          width="50%"
          height="500px"
          src="img/main_salad (1).jpg"
          onClick={() => {}}
        ></img>
        <img
          className="mainImg2"
          width="50%"
          height="500px"
          src="img/main_salad (2).jpg"
          onClick={() => {}}
        ></img>
      </div>
    </div>
  );
}

export default Home;
