function Expereience() {
  return (
    <div className="Experience">
      <div className="insta_text">
        <h1>Instagram</h1>
        <p>@green_table </p>
        <p> 그린테이블의 다양한 소식을 가장 빠르게 만나보세요.</p>
      </div>

      <img
        className="instaImg"
        src="/img/insta1.jpg"
        style={{ marginTop: "21px", margin: "20px", marginLeft: "50px" }}
      ></img>
      <img
        className="instaImg"
        src="/img/insta2.jpg"
        style={{ margin: "20px" }}
      ></img>
      <img
        className="instaImg"
        src="/img/insta3.jpg"
        style={{ margin: "20px" }}
      ></img>

      <div className="insta_text">
        <h1>YouTube</h1>
        <p> </p>
        <p> 그린테이블의 브랜드영상을 만나보세요.</p>
      </div>
      <div>
        <img
          src="/img/youtube.jpg"
          style={{ margin: "50px" }}
          className="youtubeImg"
        ></img>
      </div>
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
}
export default Expereience;
