import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 100px;
  margin: 10px 0;
`;

export const SubTitle = styled.span`
  font-size: 20px;
`;

export const Button = styled.a`
  padding: 5px 10px;

  background-color: #fff;
  color: #000;
  border-radius: 10px;

  text-decoration: none;

  margin: 30px 0;
`;
