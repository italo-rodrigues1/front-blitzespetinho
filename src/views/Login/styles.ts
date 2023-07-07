import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: #242424;
  
  div {
    display: flex;
  }
  svg {
    filter: #fff;
  }
`;

export const Box = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  max-width: 300px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff08;

  margin: 10px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  label {
    margin: 10px;

    text-align: center;
    position: relative;

    input {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      height: 30px;
      border: none;

      outline: none;
      padding: 10px;
    }

    > button {
      position: absolute;

      height: 100%;

      margin: 0 -35px;
      padding: 10px;

      background-color: transparent;
      border: none;

      cursor: pointer;
    }
  }

  > button {
    width: 150px;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #111;
    cursor: pointer;
    border: none;

    margin: 10px 0;

    padding: 10px;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -190px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    position: relative;
  }
  span {
    color: #fff;
    font-size: 12px;
  }
`;

export const Footer = styled.div`
  a {
    color: #a7ab07;
    text-decoration: none;
    margin: 0 5px;
  }
`;
