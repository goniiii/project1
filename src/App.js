import "./App.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Brand from "./components/brand.js";
import Home from "./components/home.js";
import Expereience from "./components/experience.js";
import Info from "./components/info.js";
import Best from "./components/best.js";
import MyPage from "./components/mypage.js";
import Join from "./components/join";
import NotFound from "./components/404";
import ItemDetail from "./components/itemDetail";
import SNS from "./components/snsIcon";

// import Detail from "./components/detail.js";
// import Product from "./components/product.js";
// import Location from "./components/location.js";
// import New from "./components/new.js";
// import Scroll from "./components/scroll";
// import D from "./components/d";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* <SNS></SNS> */}
      {/* <Scroll></Scroll> */}
      <div className="AppContent">
        {/* <Navbar> */}

        <div className="topMenu">
          <ul>
            <li>
              <a href={process.env.PUBLIC_URL + "/mypage"}>LOGIN</a>
            </li>
            <li>
              {" "}
              <a href={process.env.PUBLIC_URL + "/join"}>JOIN</a>
            </li>
            <li>
              {" "}
              <a href={process.env.PUBLIC_URL + "/mypage"}>ORDER</a>
            </li>
            <li>
              {" "}
              <a href={process.env.PUBLIC_URL + "/mypage"}>MY PAGE</a>
            </li>
          </ul>
        </div>
        <div className="inner_first">
          <div className="logo">
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
              src={process.env.PUBLIC_URL + "/img/logo.png"}
            ></img>
          </div>
        </div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar bg="light" expand="lg"> */}
          <Container className="nav">
            <div className="nav_menu_text">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {/* <div>
                    <Nav.Link
                      className="nav_title"
                      onClick={() => {
                        navigate("/");
                      }}
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      Our Granola
                    </Nav.Link>
                  </div> */}
                  <Nav.Link
                    onClick={() => {
                      navigate("/brandstory");
                    }}
                  >
                    Brand Story
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => {
                      navigate("/expreience");
                    }}
                  >
                    Expereience
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      navigate("/products");
                    }}
                  >
                    Products
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    My page
                  </Nav.Link>

                  {/* <Nav.Link
                    onClick={() => {
                      navigate("/d");
                    }}
                  >
                    d
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/brandstory" element={<Brand></Brand>} />
          <Route path="/products" element={<Best></Best>}></Route>
          <Route path="/expreience" element={<Expereience></Expereience>} />
          <Route path="/mypage" element={<MyPage></MyPage>} />
          <Route path="/join" element={<Join></Join>} />
          <Route path="*" element={<NotFound></NotFound>} />
          <Route path="/itemDetail" element={<ItemDetail />}></Route>
          {/* <Route path="/location" element={<Location></Location>} /> */}
          {/* <Route path="/products/pd001" element={<Detail></Detail>} /> */}
          {/* <Route path="/products/best" element={<Best></Best>} />
          <Route path="/products/new" element={<New></New>} /> */}
          {/* <Route path="/d" element={<D></D>} /> */}
        </Routes>
      </div>
      <Info></Info>
    </div>
  );
}

export default App;
