import useProducts, { PropsDelete } from "../../hooks/useProducts";
import { Box, BoxButton, Button, Container } from "./styles";

export default function ModalAcceptOrReject({ id, closeModal }: PropsDelete) {
  const { removeProduct } = useProducts();

  return (
    <Container>
      <Box>
        <h1>Deseja mesmo excluir?</h1>
        <BoxButton>
          <Button
            option="sim"
            onClick={() => removeProduct({ id, closeModal })}
          >
            Sim
          </Button>
          <Button option="nao" onClick={() => closeModal(false)}>
            Não
          </Button>
        </BoxButton>
      </Box>
    </Container>
  );
}
