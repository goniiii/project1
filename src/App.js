import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Brand from "./components/brand.js";
import Home from "./components/home.js";
import Product from "./components/product.js";
import Location from "./components/location.js";
import Expereience from "./components/experience.js";
import Info from "./components/info.js";
import Detail from "./components/detail.js";
import Best from "./components/best.js";
import MyPage from "./components/mypage.js";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="AppContent">
        <Navbar bg="light" expand="lg">
          <Container className="nav">
            <Navbar.Brand href="/">Green Table</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"></Nav.Link>
                <Nav.Link href="/brandstory">Brand Story</Nav.Link>

                <Nav.Link href="/experience">Expereience</Nav.Link>
                <Nav.Link href="/location">Location</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/products/new">New</NavDropdown.Item>
                  <NavDropdown.Item href="/products/best">
                    Best
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/products">All</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="/mypage">My page</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Green Table</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/brandstory">Brand Story</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/expereience">Expereience</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/brandstory" element={<Brand></Brand>} />
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/expreience" element={<Expereience></Expereience>} />
          <Route path="/location" element={<Location></Location>} />
          <Route path="/products/pd001" element={<Detail></Detail>} />
          <Route path="/products/best" element={<Best></Best>} />
          <Route path="/mypage" element={<MyPage></MyPage>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Info></Info>
    </div>
  );
}

export default App;
