import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Scroll from "./scroll";

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
      {/* 스크롤 복붙해서 사용해본것 ===============================*/}
      {/* <Scroll></Scroll> */}

      <header className="header_home">
        <video width="100%" muted autoPlay loop>
          <source src="/video/main_video.mp4" type="video/mp4"></source>
        </video>
        <section>
          <div className="videoText">
            <h1>Our Granola</h1>
          </div>
        </section>
      </header>

      {/* 홈화면 브랜드 소개글 ================================================*/}

      <div className="main_brand_info">
        <p>WHY OUR GRANOLA?</p>
        <p className="brandInfoText">우리가 더 맛있게</p>
        <p className="brandInfoText">더 건강하게</p>
        <p className="brandInfoText">더 믿을 수 있게</p>
        <div className="brandDetailInfo">
          <p>
            셰프의 경험과 연구를 통해 고소함, 바삭함, 새콤달콤한 맛의 밸런스를
            최상으로 이끌어 낸 프리미엄 그래놀라입니다.
          </p>
          <p>
            전문 셰프가 품질 좋은 원재료만 철저하게 위생을 관리해 매일
            생산합니다.
          </p>
        </div>
      </div>

      {/* 이벤트========================================================= */}

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
      {/* 이벤트소개글 ===========================================================*/}

      {/* <div className="main_text">
        <span>런칭기념 무료배송 이벤트</span>
        <span>신규 회원 가입자 5% 할인 쿠폰 이벤트</span>
        <span>런칭 이벤트</span>
      </div> */}
    </div>
  );
}

// 스크롤 top 버튼 만들려다 실패
// function handleScroll() {
//   let [ScrollY, setScrollY] = useState(0);
//   const scrollTop = document.getElementById("app")?.scrollTop;
//   setScrollY(scrollTop);
// }

export default Home;
