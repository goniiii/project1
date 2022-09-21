import { useState } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function Product() {
  let navigate = useNavigate();
  let [products, setProducts] = useState([
    {
      id: "pd001",
      itemName: "그린테이블 시그니처 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/cereal.jpg",
    },
    {
      id: "pd002",
      itemName: "그린테이블 저당 비건 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/berries.jpg",
    },
    {
      id: "pd003",
      itemName: "그린테이블 초코 카카오 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/blueberry.jpg",
    },
    {
      id: "pd004",
      itemName: "그린테이블 초코 카카오 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/muesli.jpg",
    },
    {
      id: "pd005",
      itemName: "그린테이블 초코 카카오 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/cereal4.jpg",
    },
    {
      id: "pd006",
      itemName: "그린테이블 초코 카카오 수제 그래놀라",
      content:
        "아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아헤매는 나는야 그래놀라 유목민 이라구요?",
      imgPath: "img/cereal5.jpg",
    },
  ]);
  return (
    <Container>
      <Row sm={1} md={3}>
        {products.map((data, i) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={products[i].imgPath} />
                <Card.Body>
                  <Card.Title>{products[i].itemName}</Card.Title>

                  <Card.Text>{products[i].content}</Card.Text>

                  <Button
                    variant="light"
                    onClick={() => {
                      navigate("/product/" + products[i].id);
                    }}
                  >
                    주문하기
                  </Button>

                  {/* <Button
                    variant="warning"
                    onClick={() => {
                      navigate("/product/" + products[i].id);
                    }}
                  >
                    찜하기
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Product;
