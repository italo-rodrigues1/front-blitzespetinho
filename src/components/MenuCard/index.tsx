import { Box, Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useContext } from "react";
import Modal from "../Modal";
import { toast } from "react-toastify";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";
import { AuthContext, AuthContextData } from "../../context";

export default function MenuCard() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const { authenticate } = useContext(AuthContext) as AuthContextData;

  const { products, setProducts, category, oldProducts } = useContext(
    ProductsContext
  ) as ProductsContextData;

  const filterMenu = (value: string) => {
    const findValue: any = oldProducts.filter(
      (product: any) => product.idCategory == value
    );

    if (findValue.length <= 0) {
      return toast.warn("Nenhum produto encotrado");
    }

    setProducts(findValue);
  };

  const handleClick = (cardIndex: null) => {
    setSelectedCard(cardIndex);
  };

  return (
    <Container>
      {category.length > 0 &&
        category.map((cate: any) => (
          <Box
            key={cate._id}
            isSelected={selectedCard === cate._id}
            onClick={() => {
              filterMenu(cate._id);
              handleClick(cate._id);
            }}
          >
            <img src={cate.image} alt="icon menu" />
            <p>{capitalizeFirstLetter(cate.name)}</p>
          </Box>
        ))}
      {authenticate && (
        <Box onClick={() => setOpenModal(true)}>
          <AiFillPlusCircle />
        </Box>
      )}
      {openModal && <Modal option="menu" setOpenModal={setOpenModal} />}
    </Container>
  );
}
