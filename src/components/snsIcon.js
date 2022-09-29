function SNS() {
  return (
    <div className="sns">
      <a
        href="https://www.instagram.com/our.granola/?utm_medium=copy_link"
        target="_blank"
      >
        <img src={process.env.PUBLIC_URL + "/img/instaIcon.png"}></img>
      </a>
    </div>
  );
}
export default SNS;
