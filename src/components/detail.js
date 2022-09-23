import { Tab, Tabs, Nav } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Review from "./review";

function Detail() {
  let [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="detail">
      {/* <p>pd001 상세페이지</p> */}
      <img className="detail_image" src="/img/cereal.jpg"></img>
      <div className="detail_info">
        <span>상품 간략 소개 가격 등등등</span>
      </div>

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
    <div>
      {
        [
          <div>
            <p>상품정보</p>
          </div>,
          <div>
            <p>리뷰 페이지</p>
            <p>베스트 리뷰</p>
            <Review></Review>
            <input
              className="qna"
              type="text"
              placeholder="리뷰를 남겨주세요."
            ></input>
            <button style={{ margin: "20px" }}>작성하기</button>
          </div>,
          <div>
            <p>문의페이지</p>
            <form>
              <input
                className="qna"
                type="text"
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
            <img src="/img/info.jpg"></img>
          </div>,
        ][tabIndex]
      }
    </div>
  );
}
export default Detail;
