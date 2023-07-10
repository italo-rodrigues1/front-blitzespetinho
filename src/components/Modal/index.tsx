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
  Select,
} from "./styles";
import { ChangeEvent, useState, useEffect } from "react";
import convertImageForBase64 from "../../utils/convertImageFoBase64";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";
// import { onlyNumber } from "../../utils/regexFormat";

type PropsModal = {
  option: string;
  setOpenModal: (open: boolean) => void;
};

export default function Modal({ option, setOpenModal }: PropsModal) {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const [categoryName, setCategoryName] = useState("");

  const { createCategoryOrProduct, getCategory, category } = useProducts();

  const validationFile = async (file: any, error: any) => {
    if (error.length > 0) {
      if (error[0].errors[0].code === "too-many-files") {
        return toast.error("Você só pode colocar uma imagem por vez!");
      }
      if (error[0].errors[0].code === "file-invalid-type") {
        return toast.error("Importe apenas imagens: .png, .jpeg e .svg");
      }
    }

    const base64 = (await convertImageForBase64(file[0])) as string;
    setFile(base64);
  };

  const customDisable = () => {
    if (option === "card" && (!name || !file || !price || !categoryName)) {
      setIsDisable(true);
      return;
    }
    if (option === "menu" && (!name || !file)) {
      setIsDisable(true);
      return;
    }
    setIsDisable(false);
  };

  useEffect(() => {
    customDisable();
  }, [name, file, description, price, categoryName]);

  useEffect(() => {
    getCategory();
  }, []);

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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          {option === "card" && (
            <>
              <Inputs
                type="text"
                placeholder="Descrição..."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
              <Inputs
                type="text"
                placeholder="Preço..."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
              />
              <Select onChange={(e: any) => setCategoryName(e.target.value)}>
                <option value="">--Categoria--</option>
                {category.length > 0 &&
                  category.map((value: any) => (
                    <option key={value?._id} value={value?.name}>
                      {value?.name}
                    </option>
                  ))}
              </Select>
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
            disabled={isDisable}
            onClick={() =>
              createCategoryOrProduct({
                options: option === "card" ? "product" : "category",
                item: {
                  name: name.trim(),
                  description,
                  price,
                  image: file,
                  category: categoryName.trim(),
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
