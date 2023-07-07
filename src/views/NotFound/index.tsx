import { Button, Container, SubTitle, Title } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <Title>Oops!</Title>
      <SubTitle>404 | Página não encontrada</SubTitle>
      <Button href="/">Voltar</Button>
    </Container>
  );
}
