import { Button } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

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
          width="50%"
          height="500px"
          src="img/logo.jpg"
          cursor="pointer"
          onClick={() => {
            console.log("눌림");
          }}
        ></img>
        <img width="50%" height="500px" src="img/salad2.jpg"></img>
      </div>
      <div className="bottom">
        <h1 style={{ color: "darkgreen" }}>Experience</h1>
        <br />
        <br />
        <Button variant="success">Instagram</Button>
      </div>
      <div>
        <img
          className="mainImg1"
          width="50%"
          height="500px"
          src="img/main_salad (1).jpg"
          onClick={() => {
            console.log("눌림");
          }}
        ></img>
        <img
          className="mainImg2"
          width="50%"
          height="500px"
          src="img/main_salad (2).jpg"
          onClick={() => {
            console.log("눌림");
          }}
        ></img>
      </div>
    </div>
  );
}

export default Home;
