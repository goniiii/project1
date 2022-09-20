function Brand() {
  return (
    <div>
      {" "}
      <img width="80%" src="img/cereal.jpg"></img>
      <img
        width="40px"
        src="img/free-icon.png"
        onClick={() => {
          console.log("next");
        }}
      ></img>
    </div>
  );
}

export default Brand;
