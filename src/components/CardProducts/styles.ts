import { styled } from "styled-components";

export const Container = styled.div`
  width: 305px;
  height: 221px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 8px 10px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  > img {
    height: 65%;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  svg {
    cursor: pointer;
    width: 70px;
    color: rgb(17 17 17);
    height: 70px;
  }
`;

export const Details = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #111;

  padding: 0 10px;

  > svg {
    height: 40px;
    width: 40px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2px;

  > h1 {
    font-size: 24px;
    font-weight: 600;
  }

  > h2 {
    font-size: 16px;
    font-weight: 400;
    > span {
      font-size: 20px;
    }
  }

  > p {
    font-size: 10px;
  }
`;
