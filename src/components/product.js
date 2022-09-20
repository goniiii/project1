import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Product() {
  let [products, setProducts] = useState([
    {
      id: "pd001",
      itemName: "plate1",
      content: "상품1",
      imgPath: "tableware/mug.jpg",
    },
    {
      id: "pd002",
      itemName: "plate2",
      content: "상품2",
      imgPath: "tableware/whiteplate.jpg",
    },
  ]);

  return (
    <div>
      {products.map((data, i) => {
        let temp = [...products];
        setProducts(temp);
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{products.itemName[i]}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default Product;
