import { Tab, Tabs, Nav } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Detail() {
  let [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <p>pd001 상세페이지</p>
      <img width="50%" height="300px" src="img/cereal.jpg"></img>
      <p>그래놀라</p>

      <p>그래놀라</p>
      <p>그래놀라</p>
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
        <Comp tabIndex={tabIndex} />
      </div>
    </div>
  );
}

function Comp({ tabIndex }) {}
export default Detail;
