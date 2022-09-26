import { Tab, Tabs, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Review from "./review";
import Scroll from "../components/scroll";
import Menu1 from "./menu1";

function Detail() {
  let [tabIndex, setTabIndex] = useState(0);
  let [show, setShow] = useState(true);

  useEffect(() => {
    const sto = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(sto);
    };
  }, []);

  return (
    <div className="detail">
      <Scroll></Scroll>
      {/* <p>pd001 상세페이지</p> */}
      <h2 className="menu_name">그린테이블 시그니처 그래놀라</h2>
      <Button variant="success">구매하기</Button>
      {/* <h3 className="menu_price">11000원</h3> */}
      <Menu1></Menu1>
      {/* <img className="detail_image" src="/img/cereal.jpg"></img> */}
      {/* <div className="detail_info">상품 간략 소개 가격 등등등</div> */}

      <div className="tab">
        <Nav variant="tabs" defaultActiveKey="link1">
          <Nav.Item>
            <Nav.Link
              style={{ color: "gray" }}
              eventKey="link1"
              onClick={() => {
                setTabIndex(0);
              }}
            >
              상세정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "gray" }}
              eventKey="link2"
              onClick={() => {
                setTabIndex(1);
              }}
            >
              리뷰
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "gray" }}
              eventKey="link3"
              onClick={() => {
                setTabIndex(2);
              }}
            >
              문의
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "gray" }}
              eventKey="link4"
              onClick={() => {
                setTabIndex(3);
              }}
            >
              반품/교환정보
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <Comp /> */}

        <Comp tabIndex={tabIndex} />
      </div>
    </div>
  );
}

function Comp({ tabIndex }) {
  let [inputValue, setInputValue] = useState("");
  return (
    <div style={{ width: "80%" }}>
      {
        [
          <div className="detail_photo">
            <img
              src="/img/detail.jpg"
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "150px",
              }}
            ></img>
            <br />
            <img src="/img/detail2.jpg"></img>
          </div>,
          <div>
            <p>리뷰 페이지</p>

            <Review></Review>
            <input
              className="qna"
              type="text"
              placeholder="리뷰를 남겨주세요."
            ></input>
            <button style={{ margin: "20px" }}>작성하기</button>
          </div>,
          <div>
            <form>
              <input
                className="qna"
                type="text"
                style={{ marginTop: "100px" }}
                placeholder="문의를 남겨주세요."
                onChange={(e) => {
                  console.log(e.target.value);
                  setInputValue(e.target.value);
                }}
              ></input>
              <button
                style={{ margin: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(inputValue);
                }}
              >
                작성하기
              </button>
              <p>{inputValue}</p>
            </form>
          </div>,
          <div>
            <img src="/img/info.jpg" style={{ marginTop: "100px" }}></img>
          </div>,
        ][tabIndex]
      }
    </div>
  );
}
export default Detail;
