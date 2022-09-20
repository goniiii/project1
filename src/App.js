import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Brand from "./component/brand.js";

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
            <Nav.Link href="/expreience">Expreience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/brandstory" element={<Brand></Brand>} />
        <Route
          path="/"
          element={
            <div>
              <video width="100%" muted autoPlay loop>
                <source src="video/forest.mp4" type="video/mp4"></source>
              </video>
            </div>
          }
        />
        <Route
          path="/shop"
          element={
            <div>
              <p>shop 화면</p>
            </div>
          }
        />
        <Route
          path="/location"
          element={
            <div>
              <p>location 화면</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
