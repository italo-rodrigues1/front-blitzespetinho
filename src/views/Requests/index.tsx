import { toast } from "react-toastify";
import {
  Box,
  BoxButton,
  BoxCard,
  BoxLeft,
  ButtonBack,
  ButtonSend,
  Card,
  Container,
  Details,
  ImageBox,
  Price,
  PriceTotal,
  QuantityProduct,
  SendRequest,
  Title,
} from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

import TestImg from "../../assets/imgTest.svg";

export default function Request() {
  const total = 0;
  const card = true;
  const number = 1;
  return (
    <Container>
      <Box>
        <ButtonBack to="/">
          <MdKeyboardArrowLeft color="FFC700" />
          <span>Voltar</span>
        </ButtonBack>
        <h1> Meus pedidos</h1>
        {card ? (
          <BoxCard>
            <Card>
              <BoxLeft>
                <ImageBox>
                  <img src={TestImg} alt="" />
                </ImageBox>
                <Details>
                  <Title>Salsichão </Title>
                  <Price>
                    R<span>$</span> 5,00
                  </Price>
                </Details>
              </BoxLeft>
              <QuantityProduct>
                <BsFillArrowUpCircleFill color="FFC700" cursor="pointer" />
                {number}
                <BsFillArrowDownCircleFill color="FFC700" cursor="pointer" />
              </QuantityProduct>
            </Card>
            
          </BoxCard>
        ) : (
          <p>Nenhum produto selecionado ainda...</p>
        )}

        <SendRequest>
          <PriceTotal>
            Total: <span>{total}</span>
          </PriceTotal>
          <BoxButton>
            <ButtonSend onClick={() => toast.success("asdasd")}>
              Fazer Pedido
            </ButtonSend>
          </BoxButton>
        </SendRequest>
      </Box>
    </Container>
  );
}
