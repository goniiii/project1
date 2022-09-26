import { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function Event() {
  let [show, setShow] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const sto = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(sto);
    };
  }, []);

  return (
    <div className="new_event">
      {show == true ? (
        <Alert variant="success">
          <Alert.Heading>NEW UPDATE </Alert.Heading>
          <p>신제품 업데이트!</p>
          <Button
            variant="success"
            onClick={() => {
              navigate("/products/new");
            }}
          >
            이 주의 신상 할인받기 >{" "}
          </Button>
          <hr />
          <p className="mb-0">이 기회는 5초후 사라집니다! </p>
        </Alert>
      ) : null}
    </div>
  );
}
export default Event;
