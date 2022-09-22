import { Tab, Tabs, Nav } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Detail() {
  let [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="detail">
      {/* <p>pd001 상세페이지</p> */}
      <img className="detail_image" src="img/cereal.jpg"></img>
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
  return (
    <div>
      {
        ([
          <div>
            <p>상품정보</p>
          </div>,
          <div>
            <p>리뷰</p>
          </div>,
        ],
        [tabIndex])
      }
    </div>
  );
}
export default Detail;
