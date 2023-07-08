import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: #f6f6f6;
`;

export const Header = styled.header`
  position: relative;
  height: 174px;

  background-color: #111;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    font-weight: 900;
  }
`;

export const Logout = styled.div`
  text-align: right;
  padding-bottom: 8px;
  height: 50px;

  > button {
    height: 100%;
    width: 50px;

    background-color: #fff;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.81);

    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const TitleLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Logo = styled.div`
  height: 100%;
  width: 100%;
  max-width: 325px;

  text-align: left;
  font-size: 20px;
  padding: 30px 10px;

  > p {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Cart = styled.div``;

export const ButtonCreateProducts = styled.button``;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > p {
    color: #111;
    margin: 20px 0;
  }
`;

export const Card = styled.div``;
