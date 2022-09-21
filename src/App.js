import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Brand from "./components/brand.js";
import Home from "./components/home.js";
import Product from "./components/product.js";
import Location from "./components/location.js";
import Expereience from "./components/experience.js";
import Info from "./components/info.js";
import Detail from "./components/detail.js";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Green Table</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/brandstory">Brand Story</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/expereience">Expereience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/brandstory" element={<Brand></Brand>} />
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/expreience" element={<Expereience></Expereience>} />
        <Route path="/location" element={<Location></Location>} />
        <Route path="/product/pd001" element={<Detail></Detail>} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      <Info></Info>
    </div>
  );
}

export default App;
