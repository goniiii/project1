import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <div className="gt" style={{ fontFamily: "initial" }}>
      <ul className="list">
        <li>
          <img
            src="img/breakfast.jpg"
            style={{ width: "364px", height: "200px" }}
          ></img>
          <div className="gt_info">
            <h4>나와 내 가족이 먹고 싶은 상품을 판매합니다.</h4>
            <p>
              "그린테이블은 사람의 몸에 이로운 상품이 우리의 삶까지 변화시킬 수
              있다고 믿습니다. 내가 먹고 쓰는 것이 곧 '나'이니까요."
            </p>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    // <Carousel variant="dark">
    //   <Carousel.Item>
    //     <img
    //       style={{ marginLeft: "250px", height: "780px" }}
    //       className="d-block w-75"
    //       src="img/cereal.jpg"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption></Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       style={{ marginLeft: "250px", height: "780px" }}
    //       className="d-block w-75"
    //       src="img/granola.jpg"
    //       alt="Second slide"
    //     />
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <img
    //       style={{ marginLeft: "250px", height: "780px" }}
    //       className="d-block w-75"
    //       src="img/berry.jpg"
    //       alt="Third slide"
    //     />
    //   </Carousel.Item>
    //   {/* <Carousel.Item>
    //     <img
    //       className="d-block w-75"
    //       src="img/cuisine.jpg"
    //       alt="Fourth slide"
    //     />
    //   </Carousel.Item> */}
    // </Carousel>
  );
}

export default DarkVariantExample;
