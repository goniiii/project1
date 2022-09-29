import { Nav, Button, Tab, Tabs, Sonnet } from "react-bootstrap";
import { useState } from "react";

function ItemDetail() {
  let [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="detailArea">
        <div className="BigImg">
          <img style={{ float: "left" }} src="./img/pd1.jpg"></img>
        </div>
        <div className="infoArea">
          <div className="productTitle">
            <span>시그니처 220g</span>
          </div>
          <div className="summary">
            <ul>
              <li>
                <span>
                  풍부한 견과류와 새콤달콤한 크랜베리가 들어간 아워그래놀라만의
                  <br />
                  특별한 레서피로 만든 시그니처.
                  <br />
                  적은 양에 비해 포만감은 높지만 칼로리가 높지 않아 부담이
                  없어요.
                  <br />
                  1회 제공량의 칼로리가 밥 반공기도 안 되거든요.
                </span>
              </li>
              <li className="productPrice">
                <span className="title">
                  <span style={{ marginRight: "10px", marginTop: "10px" }}>
                    소비자가
                  </span>
                  <span style={{ marginTop: "10px" }}>15,000원</span>
                </span>
              </li>
              <li className="productPrice">
                <span style={{ marginTop: "13px", marginRight: "10px" }}>
                  판매가
                </span>
                <span style={{ fontSize: "30px", marginLeft: "10px" }}>
                  12,500원
                </span>
              </li>
              <li>
                <span style={{ marginTop: "30px" }}>구매수량</span>
                <sapn>
                  <input
                    className="quantity"
                    type="text"
                    value="1"
                    style={{ marginLeft: "100px", marginTop: "30px" }}
                  ></input>
                </sapn>
              </li>
              <li>
                <span style={{ marginTop: "30px" }}>결제금액</span>
              </li>
            </ul>
          </div>
          <div className="totalProducts">
            <tr>
              {/* <td>시그니처 220g</td>
              <td>
                <span>
                  <input type="text" style={{ width: "30px" }}></input>
                </span>
              </td> */}
              <td>
                <span>
                  <input type="hidden"></input>
                </span>
              </td>
            </tr>
          </div>
          <div className="button">
            <div className="buyButton">
              <Button variant="dark" style={{ width: "100%", height: "60px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  구매하기
                </span>
              </Button>
              <Button
                variant="light"
                style={{
                  border: "1px solid lightgray",
                  width: "50%",
                  marginTop: "10px",
                }}
              >
                장바구니
              </Button>
              <Button
                variant="light"
                style={{
                  border: "1px solid lightgray",
                  width: "50%",
                  marginTop: "10px",
                }}
              >
                관심상품
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        {/* <p>pd001 상세페이지</p> */}

        {/* <h3 className="menu_price">11000원</h3> */}

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
                <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                  상품정보
                </span>
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
                <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                  구매정보
                </span>
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
                <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                  상품리뷰
                </span>
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
                <span style={{ fontSize: "15px", marginBottom: "5px" }}>
                  상품문의
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Comp /> */}

          <Comp tabIndex={tabIndex} />
        </div>
      </div>
      {/* <div className="tabs">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="상품정보"></Tab>
          <Tab eventKey="profile" title="구매정보"></Tab>
          <Tab eventKey="longer-tab" title="상품후기"></Tab>
          <Tab eventKey="contact" title="상품문의"></Tab>
        </Tabs>
      </div> */}
    </div>
  );
}

function Comp({ tabIndex }) {
  let [inputValue, setInputValue] = useState("");
  return (
    <div>
      {
        [
          <div className="detail_photo">
            <img
              src="./img/detailInfo.jpg"
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "150px",
              }}
            ></img>

            <img src="./img/detailInfo2.jpg"></img>
          </div>,
          <div className="reviewBoard" style={{ padding: "100px" }}>
            <div></div>
            <div className="productReview">
              <div></div>
            </div>
            {/* <input
              className="qna"
              type="text"
              placeholder="리뷰를 남겨주세요."
            ></input> */}
            {/* <button style={{ margin: "20px" }}>작성하기</button> */}
          </div>,
          <div style={{ padding: "100px" }}>
            <form>
              {/* <input
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
              <p>{inputValue}</p> */}
            </form>
          </div>,
          <div style={{ padding: "100px" }}>
            {/* <img src="./img/info.jpg" style={{ marginTop: "100px" }}></img> */}
          </div>,
        ][tabIndex]
      }
    </div>
  );
}
export default ItemDetail;
