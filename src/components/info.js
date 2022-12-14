function Info() {
  return (
    <div className="Info">
      <div className="infoNumber">
        <span style={{ fontWeight: "bold", marginTop: "50px" }}>CS </span>
        <br />
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
          010-1234-5678
        </span>
      </div>
      <div className="infoDetail">
        <h1>Our Granola</h1>
        <p>
          상호: (주)아워그래놀라 주소:서울특별시 성동구 아차산로 78 대표:박귀리
        </p>
        <p>
          대표번호:1800-1976 | 팩스번호: 02-460-8855 | 메일:ourgranola@dskjf.com
        </p>
        <p>사업자등록번호: 206352699824987</p>
      </div>
      <div className="infoBank">
        <span style={{ fontWeight: "bold", marginTop: "50px" }}>BANK</span>
        <br />
        <span>국민은행 123455-04-483394</span>
        <br></br>
        <span style={{ fontWeight: "bold" }}>박귀리(아워그래놀라) </span>
      </div>
    </div>
  );
}
export default Info;
