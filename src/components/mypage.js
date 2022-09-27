import { Form, Button } from "react-bootstrap";
import { useNavigate, Route, Routes } from "react-router-dom";
import Join from "../components/join";

function MyPage() {
  let navigate = useNavigate();
  return (
    <div
      style={{ width: "500px", margin: "100px auto", fontFamily: "initial" }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="warning" type="submit">
          로그인
        </Button>
        <Button
          variant="dark"
          type="submit"
          style={{ margin: "20px" }}
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </Button>
      </Form>
    </div>
  );
}

export default MyPage;
