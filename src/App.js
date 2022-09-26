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

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Scroll></Scroll>
      <div className="AppContent">
        <Navbar bg="light" expand="lg">
          <Container className="nav">
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link
                    onClick={() => {
                      navigate("/");
                    }}
                    style={{ fontSize: "2rem" }}
                  >
                    Green Table
                  </Nav.Link>
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
                  {/* <Nav.Link
                    onClick={() => {
                      navigate("/location");
                    }}
                  >
                    Location
                  </Nav.Link> */}
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    {/* <NavDropdown.Item
                      onClick={() => {
                        navigate("/products/new");
                      }}
                    >
                      New
                    </NavDropdown.Item> */}
                    <NavDropdown.Item href="/products/new">
                      New
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/products/best");
                      }}
                    >
                      Best
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/products/all");
                      }}
                    >
                      All
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    My page
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/brandstory" element={<Brand></Brand>} />
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/expreience" element={<Expereience></Expereience>} />
          {/* <Route path="/location" element={<Location></Location>} /> */}
          <Route path="/products/pd001" element={<Detail></Detail>} />
          <Route path="/products/best" element={<Best></Best>} />
          <Route path="/products/new" element={<New></New>} />
          <Route path="/mypage" element={<MyPage></MyPage>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Info></Info>
    </div>
  );
}

export default App;
