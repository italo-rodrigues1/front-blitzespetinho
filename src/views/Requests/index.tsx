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
import { useContext } from "react";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";

export default function Request() {
  const priceTotal = localStorage.getItem("total");

  const { addProducts, sendProduct } = useContext(
    ProductsContext
  ) as ProductsContextData;

  return (
    <Container>
      <Box>
        <ButtonBack to="/">
          <MdKeyboardArrowLeft color="FFC700" />
          <span>Voltar</span>
        </ButtonBack>
        <BoxCard>
          {addProducts && addProducts.length > 0 ? (
            addProducts.map((addProduct: any) => (
              <Card key={addProduct._id}>
                <BoxLeft>
                  <ImageBox>
                    <img src={addProduct.image} alt="" />
                  </ImageBox>
                  <Details>
                    <Title>{addProduct.name}</Title>
                    <Price>
                      R<span>$</span> {addProduct.price}
                    </Price>
                  </Details>
                </BoxLeft>
                <QuantityProduct>
                  <BsFillArrowUpCircleFill color="FFC700" cursor="pointer" />
                  1
                  <BsFillArrowDownCircleFill color="FFC700" cursor="pointer" />
                </QuantityProduct>
              </Card>
            ))
          ) : (
            <p>Nenhum produto selecionado ainda...</p>
          )}
        </BoxCard>

        <SendRequest>
          <PriceTotal>
            Total: R<span>$</span> <span>{priceTotal || 0}</span>
          </PriceTotal>
          <BoxButton>
            <ButtonSend onClick={sendProduct}>Fazer Pedido</ButtonSend>
          </BoxButton>
        </SendRequest>
      </Box>
    </Container>
  );
}
