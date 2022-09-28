import { useState, useEffect } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function Best() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="insta_text">
        <h1
          style={{
            marginTop: "100px",
          }}
        >
          Best Items
        </h1>
      </div>
      <div className="pd_text">
        <img
          className="productImg"
          style={{ width: "300px", cursor: "pointer", marginRight: "20px" }}
          src="/img/pd1.jpg"
        ></img>

        <img
          className="productImg"
          style={{ width: "300px", cursor: "pointer", marginRight: "20px" }}
          src="/img/setpd.jpg"
        ></img>

        <img
          className="productImg"
          style={{ width: "300px", cursor: "pointer", marginRight: "20px" }}
          src="/img/pd4.jpg"
        ></img>
      </div>
      {/* <div className="best_pdtext">
        <span>시그니처</span>
        <span>4종 세트</span>
        <span>레몬요기</span>
      </div> */}
      <div className="pd_text">
        <Button
          style={{ margin: "10px", marginTop: "80px", marginBottom: "50px" }}
          variant="light"
        >
          Granola220g
        </Button>
        <Button
          style={{ margin: "10px", marginTop: "80px", marginBottom: "50px" }}
          variant="light"
        >
          Granola450g
        </Button>
        <div className="itemList">
          <ul className="dList">
            <li>
              <div className="items">
                <div>
                  <img src="/img/pd1.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">시그니처 220g</li>
                  <li className="itemInfo">
                    풍부한 견과류와 새콤달콤한 크랜베리가 들어간
                    아워그래놀라만의 늑별한 레서피로 만든 시그니처
                  </li>
                  <li className="itemPrice">
                    <span>15,000원</span>12,500원
                  </li>
                </div>
              </div>
            </li>
            <li>
              <div className="items">
                <div>
                  <img src="/img/pd1.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">시그니처 450g</li>
                  <li className="itemInfo">
                    풍부한 견과류와 새콤달콤한 크랜베리가 들어간
                    아워그래놀라만의 늑별한 레서피로 만든 시그니처
                  </li>
                  <li className="itemPrice">
                    <span>30,000원</span>24,500원
                  </li>
                </div>
              </div>
            </li>
            <li>
              <div className="items">
                <div>
                  <img src="/img/pd3.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">저당그래놀라 220g</li>
                  <li className="itemInfo">
                    당도를 줄인 시그니처 건과일을 빼고 고소한 견과류 함량을
                    높였어요
                  </li>
                  <li className="itemPrice">
                    <span>15000원</span>12,500원
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/pd3.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">저당그래놀라 450g</li>
                  <li className="itemInfo">
                    당도를 줄인 시그니처 건과일을 빼고 고소한 견과류 함량을
                    높였어요
                  </li>
                  <li className="itemPrice">
                    <span>30,000원</span>24,500원
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/pd2.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">코코발로나 220g</li>
                  <li className="itemInfo">
                    프랑스산 최고급 발로나 코코아 파우더로 만든 프리미엄 카카오
                    그래놀라
                  </li>
                  <li className="itemPrice">
                    <span>16,000원</span>13,500원
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/pd2.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">코코발로나 450g</li>
                  <li className="itemInfo">
                    프랑스산 최고급 발로나 코코아 파우더로 만든 프리미엄 카카오
                    그래놀라
                  </li>
                  <li className="itemPrice">
                    <span>30,000원</span>26,000원
                  </li>
                  <li>
                    <div></div>
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/pd4.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">레몬요기 220g</li>
                  <li className="itemInfo">
                    상큼한 레몬과 요거트, 산뜻한 딸기가 만난 아워그래놀라만의
                    특별한 그래놀라
                  </li>
                  <li className="itemPrice">
                    <span>16000원</span>13,500원
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/pd4.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">레몬요기 450g</li>
                  <li className="itemInfo">
                    상큼한 레몬과 요거트, 산뜻한 딸기가 만난 아워그래놀라만의
                    특별한 그래놀라
                  </li>
                  <li className="itemPrice">
                    <span>30,000원</span>26,000원
                  </li>
                </div>
              </div>
            </li>
            <li className="items">
              <div>
                <div>
                  <img src="/img/setpd.jpg"></img>
                </div>
                <div>
                  <li className="itemTitle">세트 상품 4종 220g</li>
                  <li className="itemInfo">
                    아워 그래놀라의 220g 4가지 맛을 한번에! 더 할인 된 가격!
                  </li>
                  <li className="itemPrice">50,000원</li>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Best;

// 처음에 맵 돌리고 한것

{
  /* <div className="product_list">
  <div className="ex">
  <img
      className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd1.jpg"
    ></img>

    <img
    className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd1.jpg"
      ></img>
    <img
    className="productImg"
    style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd3.jpg"
    ></img>
    <img
    className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd3.jpg"
      ></img>
    <span>
    시그니처220g
    <br />
      <span className="price">15000원</span>
      <br />
      <span style={{ color: "red" }}>12500원</span>
    </span>
    <span>
      시그니처450g <br />
      <span>20000원</span>
      </span>
      <span>
      저당 그래놀라 220g <br />
      <span className="price">15000원</span>
      <br />
      <span style={{ color: "red" }}>12500원</span>
      </span>
    <span>
    저당 그래놀라 450g
    <br />
      <span>20000원</span>
    </span>

    <img
      className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd2.jpg"
      ></img>
      <img
      className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd2.jpg"
    ></img>
    <img
      className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd4.jpg"
    ></img>
    <img
      className="productImg"
      style={{ width: "250px", cursor: "pointer" }}
      src="/img/pd4.jpg"
    ></img>
    <span>
      코코발로나 220g <br />
      <span className="price">15000원</span>
      <br />
      <span style={{ color: "red" }}>12500원</span>
    </span>
    <span>
    [판매예정] 코코발로나 450g <br />
    <span>20000원</span>
    </span>
    
    <span>
      레몬요기 220g <br />
      <span className="price">15000원</span>
      <br />
      <span style={{ color: "red" }}>12500원</span>
    </span>
    <span>
    [판매예정] 레몬요기 450g <br />
      <span>20000원</span>
      </span>
    <img
      className="productImg"
      style={{ width: "300px", cursor: "pointer" }}
      src="/img/setpd.jpg"
      ></img>
      <img
      className="productImg"
      style={{ width: "300px", cursor: "pointer" }}
    ></img>
    <img
    className="productImg"
      style={{ width: "300px", cursor: "pointer" }}
    ></img>
    <img
    className="productImg"
    style={{ width: "300px", cursor: "pointer" }}
    ></img>
    <span>
    레몬요기 220g <br />
      <span className="price">15000원</span>
      <br />
      <span style={{ color: "red" }}>12500원</span>
    </span>
  </div> */
}
{
  /* <img
    className="productImg"
    style={{ width: "300px", cursor: "pointer" }}
    src="/img/setpd.jpg"
  ></img> */
}
{
  /* <br />
  <span>
    세트 상품 4종 220g <br />
    <span>50000원</span>
  </span> */
}
{
  /* <div style={{ height: "100px" }}></div> */
}
{
  /* <div className="bg"> */
}
{
  /* <img className="bgImg" src="/img/wheat.jpg" alt="bgImg"></img> */
}
{
  /* <div className="bgtext">
  <h2>Products</h2>
  </div>
  <Container className="products">
  <div style={{ width: "100%", height: "150px" }}></div>

  <Row sm={1} md={3}>
    {products.map((data, i) => {
      return (
        <Col>
          <Card style={{ marginBottom: "50px", width: "20rem" }}>
          <Card.Img
              variant="top"
              src={products[i].imgPath}
              style={{
                width: "100%",
                height: "200px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/products/" + products[i].id);
              }}
            />
            <Card.Body>
              <Card.Title>{products[i].itemName}</Card.Title> */
}

{
  /* <Card.Text>{products[i].content}</Card.Text> */
}

{
  /* <Button
                variant="light"
                onClick={() => {
                  navigate("/products/" + products[i].id);
                }}
                >
                주문하기
              </Button> */
}

{
  /* <Button
            variant="warning"
            onClick={() => {
              navigate("/product/" + products[i].id);
            }}
          >
            찜하기
          </Button> */
}
{
  /* </Card.Body>
            <Card.Body> */
}
{
  /* <Card>
                <span>리뷰</span>
                <img
                src="/img/heart.jpg"
                  // variant="danger"
                  style={{ width: "20px" }}
                  onClick={() => {
                    cnt = cnt + 1;
                    setCnt(cnt);
                    console.log("cnt증가시켜줘");
                  }}
                  ></img>
                {setCnt}
              </Card> */
}
{
  /* </Card.Body>
          </Card> */
}
{
  /* </Col>
      );
    })}
  </Row>
  <div style={{ width: "100%", height: "200px" }}></div>
  </Container> */
}
{
  /* </div> */
}
{
  /* </div> */
}
// import { useState } from "react";
// import { Card, Button, Col, Row, Container } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

// function Best() {
//   let navigate = useNavigate();
//   let [like, setLike] = useState(false);
//   let [products, setProducts] = useState([
//     {
//       id: "pd001",
//       itemName: "그린테이블 시그니처 ",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/cereal.jpg",
//     },
//     {
//       id: "pd002",
//       itemName: " 저당 비건 수제 그래놀라",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/berries.jpg",
//     },
//     {
//       id: "pd003",
//       itemName: "그린테이블 카카오 수제 그래놀라",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/blueberry.jpg",
//     },
//     {
//       id: "pd004",
//       itemName: "그린테이블 그래놀라",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/muesli.jpg",
//     },
//     {
//       id: "pd005",
//       itemName: "그린테이블 수제 뮤즐리",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/cereal4.jpg",
//     },
//     {
//       id: "pd006",
//       itemName: "그린테이블 수제 그래놀라",
//       content:
//         "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
//       imgPath: "img/cereal5.jpg",
//     },
//   ]);
//   return (
//     <Container className="products">
//       <div style={{ width: "100%", height: "250px" }}>
//         <h1>Best Seller</h1>
//       </div>
//       <Row sm={1} md={3}>
//         {products.map((data, i) => {
//           return (
//             <Col>
//               <Card style={{ width: "23rem" }}>
//                 <Card.Img variant="top" src={products[i].imgPath} />
//                 <Card.Body>
//                   <Card.Title>{products[i].itemName}</Card.Title>

//                   {/* <Card.Text>{products[i].content}</Card.Text> */}

//                   <Button
//                     variant="light"
//                     onClick={() => {
//                       navigate("/products/" + products[i].id);
//                     }}
//                   >
//                     주문하기
//                   </Button>

//                   {/* <Button
//                     variant="warning"
//                     onClick={() => {
//                       navigate("/product/" + products[i].id);
//                     }}
//                   >
//                     찜하기
//                   </Button> */}
//                 </Card.Body>
//                 <Card.Body>
//                   <Card>
//                     리뷰 67 / 찜<img src="img/heart.jpg"></img>899
//                   </Card>
//                 </Card.Body>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//       <div style={{ width: "100%", height: "200px" }}></div>
//     </Container>
//   );
// }
// export default Best;
