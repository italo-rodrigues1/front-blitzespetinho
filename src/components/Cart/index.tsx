import { useNavigate } from "react-router-dom";
import { Container, CountBox } from "./styles";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";

export default function Cart() {
  const navigate = useNavigate();
  const { addProducts } = useContext(ProductsContext) as ProductsContextData;
  let countProduct = [];

  if (localStorage.getItem("item")) {
    countProduct = JSON.parse(localStorage.getItem("item") as string);
  }

  return (
    <Container onClick={() => navigate("/requests")}>
      {(addProducts.length > 0 || countProduct.length > 0) && (
        <CountBox>{addProducts.length || countProduct.length}</CountBox>
      )}
      <BsCart2 color="FFC700" />
    </Container>
  );
}
