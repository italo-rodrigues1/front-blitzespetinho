import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;

  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: #242424;
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 10px;

  > h1 {
    position: absolute;
    top: 130px;
  }
`;

export const ButtonBack = styled(Link)`
  width: 100%;

  display: flex;
  align-items: center;
  margin: 20px 0;

  text-decoration: none;

  color: #fff;

  > svg {
    height: 50px;
    width: 50px;
  }

  > span {
    font-size: 20px;
  }
`;
export const BoxCard = styled.div`
  height: auto;
  max-height: 500px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  overflow: auto;

  margin-top: 24px;
`;

export const Card = styled.div`
  height: 140px;
  width: 100%;

  background-color: #fff;
  border-radius: 10px;
  color: #111;

  display: flex;
  align-items: center;
`;

export const BoxLeft = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  padding-left: 5px;
`;

export const ImageBox = styled.div`
  height: 95%;
  width: 150px;
  border-radius: 5px;
  > img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
`;

export const Details = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 10px;

  padding-left: 5px;
`;

export const Title = styled.h1``;

export const Price = styled.span`
  /* font-size: 12px; */
  > span {
    color: #ffc700;
  }
`;

export const QuantityProduct = styled.div`
  height: 120px;
  width: 50px;

  background-color: rgba(12, 12, 12, 0.06);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  margin: 0 10px;

  font-size: 30px;
`;

export const SendRequest = styled.div`
  height: 180px;
  width: 100%;

  display: flex;
  align-items: left;
  flex-direction: column;

  border-radius: 5px;
  color: #111;
`;

export const PriceTotal = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  > span {
    color: #ffc700;
  }
`;

export const BoxButton = styled.div`
  height: 100%;
  width: 100%;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 5px;

  cursor: pointer;
`;

export const ButtonSend = styled.div`
  height: 100px;
  width: 96%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.18);
  border: 1px solid #000;
  border-radius: 5px;
`;
