import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-75" src="img/cereal.jpg" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-75" src="img/pasta.jpg" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-75"
          src="img/mozzarella.jpg"
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
