import Dropzone from "react-dropzone";
import {
  AreaDrop,
  Box,
  ButtonCreate,
  Close,
  Container,
  Header,
  Inputs,
  Main,
  Preview,
} from "./styles";
import { useState } from "react";
import convertImageForBase64 from "../../utils/convertImageFoBase64";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

type PropsModal = {
  option: string;
  setOpenModal: (open: boolean) => void;
};

export default function Modal({ option, setOpenModal }: PropsModal) {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const { createCategoryOrProduct } = useProducts();

  const validationFile = async (file: any, error: any) => {
    if (error.length > 0) {
      if (error[0].errors[0].code === "too-many-files") {
        return toast.error("Você só pode colocar uma imagem por vez!");
      }
      if (error[0].errors[0].code === "file-invalid-type") {
        return toast.error("Importe apenas imagens: .png, .jpeg e .svg");
      }
    }

    const base64: string = (await convertImageForBase64(file[0])) as string;
    setFile(base64);
  };

  return (
    <Container>
      <Box option={option}>
        <Header>
          <h1>{option === "card" ? "Criar Produto" : "Criar Categoria"}</h1>
          <Close onClick={() => setOpenModal(false)}>x</Close>
        </Header>
        <Main>
          <Inputs
            type="text"
            placeholder="Nome..."
            onChange={(e: any) => setName(e.target.value)}
          />

          {option === "card" && (
            <>
              <Inputs
                type="text"
                placeholder="Preço..."
                onChange={(e: any) => setPrice(e.target.value)}
              />
              <Inputs
                type="text"
                placeholder="Categoria"
                onChange={(e: any) => setCategoryName(e.target.value)}
              />
            </>
          )}

          <Dropzone
            onDrop={(file, error) => validationFile(file, error)}
            onError={(file) => console.log(file)}
            maxFiles={1}
            accept={{
              "image/png": [".png", ".jpeg", ".jpg", ".svg"],
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <AreaDrop {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Arraste a imagem ou click aqui!</p>
              </AreaDrop>
            )}
          </Dropzone>

          {file && (
            <Preview>
              <img src={file} alt="Image select from dropzone" />
            </Preview>
          )}

          <ButtonCreate
            type="submit"
            onClick={() =>
              createCategoryOrProduct({
                options: option === "card" ? "product" : "category",
                item: {
                  name,
                  price,
                  image: file,
                  category: categoryName,
                },
                closeModal: setOpenModal,
              })
            }
          >
            Criar
          </ButtonCreate>
        </Main>
      </Box>
    </Container>
  );
}
