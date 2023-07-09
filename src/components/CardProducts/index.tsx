import { Container, Details, Title } from "./styles";
import { useState, useContext } from "react";
import Modal from "../Modal";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import ModalAcceptOrReject from "../ModalAcceptOrReject";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";
import { AuthContext, AuthContextData } from "../../context";
import { PropsItemCart } from "../../hooks/useProducts";

type PropsProducts = {
  product?: {
    _id: string | number | undefined;
    name: string;
    description?: string;
    price: string | number;
    image: string;
  };
  option: string;
};

export default function CardProducts({ product, option }: PropsProducts) {
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModalAcceptOrReject, setIsOpenModalAcceptOrReject] =
    useState(false);

  const { authenticate } = useContext(AuthContext) as AuthContextData
  const { createItemCart } = useContext(ProductsContext) as ProductsContextData;

  return (
    <Container>
      {option === "admin" ? (
        <AiFillPlusCircle onClick={() => setOpenModal(true)} />
      ) : (
        <>
          <img src={product?.image} alt="Image of product" />

          <Details>
            <Title>
              <h1>{capitalizeFirstLetter(product?.name)}</h1>
              <p>{product?.description}</p>
              <h2>
                R$ <span>{product?.price}</span>
              </h2>
            </Title>

            {authenticate ? (
              <AiFillMinusCircle
                color="BC281C"
                onClick={() => setIsOpenModalAcceptOrReject(true)}
              />
            ) : (
              <AiFillPlusCircle
                color="FFC700"
                onClick={() => createItemCart(product as PropsItemCart)}
              />
            )}
            {isOpenModalAcceptOrReject && (
              <ModalAcceptOrReject
                id={product?._id}
                closeModal={setIsOpenModalAcceptOrReject}
              />
            )}
          </Details>
        </>
      )}

      {openModal && <Modal option="card" setOpenModal={setOpenModal} />}
    </Container>
  );
}
