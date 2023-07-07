import { styled } from "styled-components";

type PropsOption = {
  option: string;
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #1111117a;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 400px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #111;

  padding: 10px;
  margin: 0 10px;

  > h1 {
    font-size: calc(0.4vw + 2vh + 0.4vmin);
  }
`;

export const BoxButton = styled.div`
  height: 50px;
  width: 100%;

  border-radius: 5px;

  display: flex;
  gap: 8px;
`;

export const Button = styled.button<PropsOption>`
  height: 50px;
  width: 100%;

  border-radius: 5px;
  background: ${({ option }) => (option === "sim" ? "transparent" : "#000")};
  border: ${({ option }) => (option === "sim" ? "#000 1px solid" : "none")};
  color: ${({ option }) => (option === "sim" ? "#000" : "#fff")};

  cursor: pointer;
`;
