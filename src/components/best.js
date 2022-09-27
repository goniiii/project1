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

import { useState, useEffect } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function Best() {
  let navigate = useNavigate();
  let [cnt, setCnt] = useState(0);

  let [products, setProducts] = useState([
    {
      id: "pd001",
      itemName: "아워그래놀라 시그니처 ",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/cereal.jpg",
    },
    {
      id: "pd002",
      itemName: " 저당 비건 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/berries.jpg",
    },
    {
      id: "pd003",
      itemName: "아워그래놀라 카카오 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/blueberry.jpg",
    },
    {
      id: "pd004",
      itemName: "아워그래놀라 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/muesli.jpg",
    },
    {
      id: "pd005",
      itemName: "아워그래놀라 수제 뮤즐리",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/cereal4.jpg",
    },
    {
      id: "pd006",
      itemName: "아워그래놀라 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "/img/cereal5.jpg",
    },
  ]);
  return (
    <div>
      <div className="bg">
        {/* <img className="bgImg" src="/img/wheat.jpg" alt="bgImg"></img> */}
        <div className="bgtext">
          <h1 style={{ color: "brown" }}>Best Seller</h1>
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
                      <Card.Title>{products[i].itemName}</Card.Title>

                      {/* <Card.Text>{products[i].content}</Card.Text> */}

                      {/* <Button
                        variant="light"
                        onClick={() => {
                          navigate("/products/" + products[i].id);
                        }}
                      >
                        주문하기
                      </Button> */}

                      {/* <Button
                    variant="warning"
                    onClick={() => {
                      navigate("/product/" + products[i].id);
                    }}
                  >
                    찜하기
                  </Button> */}
                    </Card.Body>
                    <Card.Body>
                      {/* <Card>
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
                      </Card> */}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <div style={{ width: "100%", height: "200px" }}></div>
        </Container>
      </div>
    </div>
  );
}
export default Best;
