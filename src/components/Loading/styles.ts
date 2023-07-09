import styled, { keyframes } from "styled-components";

export const animloader = keyframes`
  0% {
    box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background-color: #111;
`;

export const Loader = styled.div`
  position: relative;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  color: #fff;
  display: block;
  margin: 15px auto;

  animation: ${animloader} 1s linear infinite alternate;
`;
