function Home() {
  return (
    <div>
      <video width="100%" muted autoPlay loop>
        <source src="video/forest.mp4" type="video/mp4"></source>
      </video>
      <div className="jb-text">
        <h1>Green Table</h1>
        <p>Sincere Energy in Nature</p>
      </div>
      <div>
        <img width="50%" src="img/salad2.jpg"></img>
      </div>
    </div>
  );
}

export default Home;
