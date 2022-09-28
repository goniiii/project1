import { Button } from "react-bootstrap";

function ItemDetail() {
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
                  <span>소비자가</span>
                </span>
                <span className="title">
                  <span>15,000원</span>
                </span>
              </li>
              <li className="productPrice">
                <span>판매가</span>
                <span style={{ fontSize: "30px", marginLeft: "10px" }}>
                  12,500원
                </span>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="totalProducts">
            <tr>
              <td>시그니처 220g</td>
              <td>
                <span>
                  <input type="text" style={{ width: "30px" }}></input>
                </span>
              </td>
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
    </div>
  );
}
export default ItemDetail;
