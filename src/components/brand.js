import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style={{ marginLeft: "250px", height: "780px" }}
          className="d-block w-75"
          src="img/cereal.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ marginLeft: "250px", height: "780px" }}
          className="d-block w-75"
          src="img/granola.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ marginLeft: "250px", height: "780px" }}
          className="d-block w-75"
          src="img/berry.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-75"
          src="img/cuisine.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default DarkVariantExample;
