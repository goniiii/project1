import { Button } from "react-bootstrap";

function Join() {
  return (
    <div className="join_">
      <h3>회원 가입</h3>
      <div className="join">
        <colgroup>
          <col style={{ width: "150px" }}></col>
          <col style={{ width: "auto" }}></col>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">아이디*</th>
            <td>
              <input type="text"></input>
              <br />
              <span>(영문소문자/숫자, 4~16자)</span>
            </td>
          </tr>

          <tr>
            <th scope="row">비밀번호*</th>

            <td>
              {" "}
              <input type="text"></input>
              <br />
              <span>
                (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자)
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">비밀번호확인*</th>

            <td>
              {" "}
              <input type="text"></input>
              <br />
            </td>
          </tr>
          <tr>
            <th scope="row">이름*</th>

            <td>
              {" "}
              <input type="text"></input>
              <br />
            </td>
          </tr>
          <tr>
            <th scope="row">휴대전화</th>

            <td>
              {" "}
              <input type="tel" style={{ width: "40px" }}></input>
              <span style={{ padding: "5px" }}>-</span>
              <input type="tel" style={{ width: "40px" }}></input>
              <span style={{ padding: "5px" }}>-</span>
              <input type="tel" style={{ width: "40px" }}></input>
              <br />
            </td>
          </tr>
          <tr>
            <th scope="row">이메일*</th>

            <td>
              {" "}
              <input type="text"></input>
              <br />
            </td>
          </tr>
        </tbody>

        {/* <h4>전체 동의</h4> */}
      </div>
      <Button variant="dark" style={{ marginBottom: "50px" }}>
        회원가입
      </Button>
    </div>
  );
}

export default Join;
