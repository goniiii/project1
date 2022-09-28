import "./App.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Brand from "./components/brand.js";
import Home from "./components/home.js";
import Product from "./components/product.js";
import Location from "./components/location.js";
import Expereience from "./components/experience.js";
import Info from "./components/info.js";
import Detail from "./components/detail.js";
import Best from "./components/best.js";
import MyPage from "./components/mypage.js";
import New from "./components/new.js";
import Scroll from "./components/scroll";
import Join from "./components/join";
import D from "./components/d";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Scroll></Scroll>
      <div className="AppContent">
        {/* <Navbar> */}
        <Navbar bg="light" expand="lg">
          {/* <Navbar bg="light" expand="lg"> */}
          <Container className="nav">
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <div>
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
                  </div>
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
          {/* <Route path="/location" element={<Location></Location>} /> */}
          <Route path="/products/pd001" element={<Detail></Detail>} />
          {/* <Route path="/products/best" element={<Best></Best>} />
          <Route path="/products/new" element={<New></New>} /> */}
          <Route path="/mypage" element={<MyPage></MyPage>} />
          <Route path="/join" element={<Join></Join>} />
          <Route path="/d" element={<D></D>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Info></Info>
    </div>
  );
}

export default App;
