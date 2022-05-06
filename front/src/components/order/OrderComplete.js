import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function OrderComplete() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "calc(100vh - 180px)" }}>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></div>
      <Container>
        <Image></Image>
        <p>주문 완료</p>
        <Button onClick={() => navigate("/")}>🏠 홈으로</Button>
        <Button onClick={() => navigate("/myPage")}>마이페이지로</Button>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  position: absolute;
  width: 100%;
  height: 75%;
  color: #5e5b52;
`;

const Image = styled.div`
  width: 600px;
  height: 600px;
  background-image: url("/Complete.png");
  background-repeat: no-repeat;
  background-position: center center;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #eefc57;
  border: 1px solid #5e5b52;
  cursor: pointer;
  margin-bottom: 30px;
`;

export default OrderComplete;
