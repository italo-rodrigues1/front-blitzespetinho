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
import { BsPlusCircleFill,  } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { useContext, useEffect } from "react";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";

export default function Request() {
  const priceTotal = localStorage.getItem("total") || 0;

  const {
    addProducts,
    sendProduct,
    quantityProductForPlusOrMinus,
    quantityProduct,
    setQuantityProduct,
  } = useContext(ProductsContext) as ProductsContextData;

  useEffect(() => {
    const quantityLocal =
      localStorage.getItem("quantityProduct") &&
      JSON.parse(localStorage.getItem("quantityProduct") as string);
    if (quantityProduct.length <= 0 && quantityLocal) {
      setQuantityProduct(quantityLocal);
    }
  }, []);

  return (
    <Container>
      <Box>
        <ButtonBack to="/">
          <MdKeyboardArrowLeft color="FFC700" />
          <span>Voltar</span>
        </ButtonBack>
        <BoxCard>
          {addProducts && addProducts.length > 0 ? (
            addProducts.map((addProduct: any, index: any) => (
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
                  <BsPlusCircleFill
                    color="FFC700"
                    cursor="pointer"
                    onClick={() =>
                      quantityProductForPlusOrMinus({
                        name: addProduct.name,
                        plusOrMinus: "+",
                        price: addProduct.price,
                      })
                    }
                  />
                  {quantityProduct.length > 0
                    ? quantityProduct[index]?.name === addProduct?.name &&
                      quantityProduct[index]?.quantity
                    : 1}
                  <AiFillMinusCircle
                    color="FFC700"
                    cursor="pointer"
                    onClick={() =>
                      quantityProductForPlusOrMinus({
                        name: addProduct.name,
                        plusOrMinus: "-",
                        price: addProduct.price,
                      })
                    }
                  />
                </QuantityProduct>
              </Card>
            ))
          ) : (
            <p>Nenhum produto selecionado ainda...</p>
          )}
        </BoxCard>

        <SendRequest>
          <PriceTotal>
            Total: R<span>$</span> <span>{priceTotal}</span>
          </PriceTotal>
          <BoxButton>
            <ButtonSend onClick={sendProduct}>Fazer Pedido</ButtonSend>
          </BoxButton>
        </SendRequest>
      </Box>
    </Container>
  );
}
