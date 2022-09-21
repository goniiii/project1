import { useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Product() {
  let navigate = useNavigate();
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="img/cereal.jpg" />
          <Card.Body>
            <Card.Title>그린테이블 시그니처 수제 그래놀라</Card.Title>
            <Card.Text>
              아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아
              헤매는 나는야 '그래놀라 유목민' 이라구요?
            </Card.Text>
            <Button
              onClick={() => {
                navigate("/product/pd001");
              }}
            >
              구매하기
            </Button>
          </Card.Body>
          <Card.Footer>리뷰 67 평점 5/5</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="img/berries.jpg" />
          <Card.Body>
            <Card.Title>그린테이블 저당 비건 수제 그래놀라</Card.Title>
            <Card.Text>
              아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아
              헤매는 나는야 '그래놀라 유목민' 이라구요?
            </Card.Text>
            <Button>구매하기</Button>
          </Card.Body>
          <Card.Footer>리뷰 67 평점 5/5</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="img/blueberry.jpg" />
          <Card.Body>
            <Card.Title>그린테이블 저당 비건 수제 그래놀라</Card.Title>
            <Card.Text>
              아직도 그래놀라 유목민이세요? 매번 다른 수제 그래놀라를 찾아
              헤매는 나는야 '그래놀라 유목민' 이라구요?
            </Card.Text>
            <Button>구매하기</Button>
          </Card.Body>
          <Card.Footer>리뷰 67 평점 5/5</Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Product;
