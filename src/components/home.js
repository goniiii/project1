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
      <header className="header_home">
        <video width="100%" muted autoPlay loop>
          <source src="/video/main_video.mp4" type="video/mp4"></source>
        </video>
        <section>
          <div className="jb-text">
            <h1>Our Granola</h1>
            {/* <p>Sincere Energy in Nature</p> */}
          </div>
        </section>
      </header>
      <img src="img/logo2.jpg"></img>
      <div className="main_event">
        <img src="/img/free.jpg"></img>

        <img
          style={{ cursor: "pointer" }}
          src="/img/sale.jpg"
          onClick={() => {
            navigate("/join");
          }}
        ></img>
        <img
          onClick={() => {
            navigate("/products");
          }}
          style={{ cursor: "pointer" }}
          src="/img/event.jpg"
        ></img>
      </div>
      <div className="main_text">
        <span>런칭기념 무료배송 이벤트</span>
        <span>신규 회원 가입자 5% 할인 쿠폰 이벤트</span>
        <span>런칭 이벤트</span>
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
