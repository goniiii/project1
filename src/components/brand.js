function Brand() {
  return (
    <div>
      <p className="brand_intro">Our Story</p>
      <div className="gt" style={{ fontFamily: "initial" }}>
        <div>
          <img
            className="brandImg1"
            src={process.env.PUBLIC_URL + "/img/oats.jpg"}
          ></img>
        </div>
        <div className="brandText1">
          <h3>Value 01</h3>
          <h1>Explore Treasure</h1>
          <br />
          자연 재료의 고소한 풍미를 담은 아워그래놀라의 그래놀라는 특별합니다.
          바쁜 아침, 통곡물의 영양을 가득 담은 그래놀라와 요거트만 있어도 건강한
          하루를 시작하기에 충분하죠.
        </div>
        <div className="brandText2">
          <h3>Value 02</h3>
          <h1>Process</h1>
          <br />
          아워그래놀라 그래놀라는 유기농 코코넛오일, 메이플 시럽, 비정제
          사탕수수를 재료로 사용하여 건강한 닷맛을 낸 제품입니다. 귀리를 약 60%
          가까이 담은 뒤 크랜베리, 아몬드 등을 각각 더해 완성했지요. 최적의 곡물
          상태를 위해 직접 실내 온도 및 습도를 조절하고 , 귀리의 수분율과 압착
          정도를 세심하게 관리했어요.
        </div>
        <div>
          <img
            className="brandImg2"
            src={process.env.PUBLIC_URL + "/img/wheat2.jpg"}
          ></img>
        </div>
        <div>
          <img
            className="brandImg1"
            src={process.env.PUBLIC_URL + "/img/grain.jpg"}
          ></img>
        </div>
        <div className="brandText1">
          <h3>Value 03</h3>
          <h1>Ingredients</h1>
          <br />
          설탕대신 스테비올배당체를 사용해 100g당 당 함량은 3g을 넘기지 않으니
          더욱 부담없고 단백질 까지 든든히 챙길 수 있어 더욱 만족스러울 거예요.
        </div>
        <div className="brandText2">
          <h3>Value 04</h3>
          <h1>Good Taste</h1>
          <br />
          3번에 걸친 저온 로스팅으로 그래놀라의 고소함과 바삭함을 극대화
          했답니다. 그래놀라의 다양한 영양과 맛을 취향대로 준비했어요.
        </div>
        <div>
          <img
            className="brandImg2"
            src={process.env.PUBLIC_URL + "/img/muesli2.jpg"}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Brand;
