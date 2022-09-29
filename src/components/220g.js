import useNavigate from "react";

function Regular() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="itemList">
        <ul className="dList">
          <li>
            <div className="items">
              <div
                onClick={() => {
                  navigate("/itemDetail");
                }}
              >
                <img src={process.env.PUBLIC_URL + "/img/pd1.jpg"}></img>
              </div>
              <div>
                <li className="itemTitle">시그니처 220g</li>
                <li className="itemInfo">
                  풍부한 견과류와 새콤달콤한 크랜베리가 들어간 아워그래놀라만의
                  늑별한 레서피로 만든 시그니처
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
                <img src={process.env.PUBLIC_URL + "/img/pd1.jpg"}></img>
              </div>
              <div>
                <li className="itemTitle">시그니처 450g</li>
                <li className="itemInfo">
                  풍부한 견과류와 새콤달콤한 크랜베리가 들어간 아워그래놀라만의
                  늑별한 레서피로 만든 시그니처
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
                <img src={process.env.PUBLIC_URL + "/img/pd3.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/pd3.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/pd2.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/pd2.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/pd4.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/pd4.jpg"}></img>
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
                <img src={process.env.PUBLIC_URL + "/img/setpd.jpg"}></img>
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
  );
}
export default Regular;
