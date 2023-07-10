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

  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #111;
`;

export const Box = styled.div<PropsOption>`
  width: 100%;
  max-width: 400px;
  height: ${(props) => (props.option === "card" ? "700px" : "500px")};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #111;

  padding: 10px;

  margin: 0 10px;
`;

export const Header = styled.header`
  height: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 10px 10px 0 0;

  > h1 {
    font-size: calc(0.4vw + 2vh + 1vmin);
  }
`;

export const Close = styled.div`
  padding: 1px 15px;

  border: #111 1px solid;
  border-radius: 5px;

  font-size: 22px;
`;

export const Main = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Inputs = styled.input`
  width: 100%;
  max-width: 292px;
  height: 54px;

  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  color: #111;

  padding: 10px;
  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 292px;
  height: 54px;

  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  color: #111;

  padding: 10px;
  outline: none;
`;

export const AreaDrop = styled.div`
  height: 100px;
  width: 100%;

  border: #111 1px solid;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

export const Preview = styled.div`
  height: 100px;
  width: 100%;

  text-align: center;

  border: #111 1px dashed;

  > img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;

export const ButtonCreate = styled.button`
  height: 50px;
  width: 100%;

  border-radius: 5px;
  background: #000;
`;
