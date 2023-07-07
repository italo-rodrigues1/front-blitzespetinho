import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;

  height: 70px;
  width: 70px;

  background-color: #111;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
  }
`;

export const CountBox = styled.div`
  position: absolute;
  top: -10px;
  right: -3px;

  text-align: center;

  border-radius: 100%;
  background-color: #ffc700;
  color: #fff;
  
  padding: 4px 13px;
`;
