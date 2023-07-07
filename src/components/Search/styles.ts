import { styled } from "styled-components";

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin: -32px 0;

  > input {
    width: 305px;
    height: 61px;
    flex-shrink: 0;
    padding: 10px 30px;
    outline: none;

    border-radius: 10px;
    border: none;
    background: #fff;
    color: #111;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }

  > svg {
    font-size: 20px;
    position: absolute;
    bottom: -9px;
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.28);
  }
`;
