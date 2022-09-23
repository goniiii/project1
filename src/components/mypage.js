import { Form, Button } from "react-bootstrap";

function MyPage() {
  return (
    <div style={{ width: "50%", margin: "100px 300px", fontFamily: "initial" }}>
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
        <Button variant="success" type="submit">
          로그인
        </Button>
        <Button variant="dark" type="submit" style={{ margin: "20px" }}>
          회원가입
        </Button>
      </Form>
    </div>
  );
}

export default MyPage;
