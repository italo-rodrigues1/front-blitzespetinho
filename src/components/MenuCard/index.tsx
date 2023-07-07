import { Box, Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import useProducts from "../../hooks/useProducts";
import { toast } from "react-toastify";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

export default function MenuCard() {
  const [openModal, setOpenModal] = useState(false);
  const [nameBox, setNameBox] = useState("");

  const filterMenu = (value: string) => {
    const findValue: any = products.filter(
      (product: any) => product.name === value.toLocaleLowerCase()
    );

    if (findValue.length <= 0) {
      return toast.warn("Nenhum produto encotrado");
    }

    setProducts(findValue);
  };

  const { authenticate } = useAuth();

  const { products, setProducts, category, getCategory } = useProducts();

  useEffect(() => {
    getCategory();
  }, []);

 
  return (
    <Container>
      {category.length > 0 &&
        category.map((cate: any) => (
          <Box
            key={cate._id}
            border={nameBox}
            onClick={() => (
              filterMenu(cate), setNameBox(!nameBox ? "border" : "")
            )}
          >
            <img src={cate.image} alt="asd" />
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
