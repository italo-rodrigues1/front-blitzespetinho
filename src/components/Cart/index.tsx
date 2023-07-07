import { useNavigate } from "react-router-dom";
import { Container, CountBox } from "./styles";
import { BsCart2 } from "react-icons/bs";

export default function Cart() {
  const navigate = useNavigate();
  const number = 0;

  return (
    <Container onClick={() => navigate("/requests")}>
      {number > 0 && <CountBox>{number}</CountBox>}
      <BsCart2 color="FFC700" />
    </Container>
  );
}
