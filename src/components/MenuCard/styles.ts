import { styled } from "styled-components";

type PropsBorder = {
  isSelected?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 56px 10px 20px;
`;

export const Box = styled.div<PropsBorder>`
  width: 90px;
  height: 90px;

  background-color: #fff;
  border-radius: 10px;

  border: ${({ isSelected }) =>
    isSelected === true ? "#FFC700 2px solid" : "none"};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  color: #111;

  cursor: pointer;

  > img {
    height: 55px;
    width: 51px;
  }

  > svg {
    height: 30px;
    width: 30px;
  }
`;
