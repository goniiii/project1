import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Green Table</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

export default App;
