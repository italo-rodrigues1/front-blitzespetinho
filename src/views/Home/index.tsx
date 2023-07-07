import { Container, Header, Logo, Main, TitleLogo } from "./styles";
import Search from "../../components/Search";
import MenuCard from "../../components/MenuCard";
import SirenLogo from "../../assets/siren.svg";
import Cart from "../../components/Cart";
import useProducts from "../../hooks/useProducts";
import CardProducts from "../../components/CardProducts";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

type PropsProduct = {
  id: string | number;
  name: string;
  description?: string;
  price: string | number;
  image: string;
};

export default function Home() {
  const { getProducts, products } = useProducts();
  const { authenticate } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Header>
        <Logo>
          <TitleLogo>
            <span>Blitz do Espetinho</span>
            <img src={SirenLogo} alt="Siren logo" />
          </TitleLogo>
          <p>Cardápio</p>
        </Logo>
        <Search />
      </Header>

      <Main>
        <MenuCard />

        {authenticate && <CardProducts option="admin" />}

        {products.length > 0 ? (
          products?.map((product: PropsProduct) => (
            <div key={product?.id}>
              <CardProducts product={product} option="user" />
            </div>
          ))
        ) : (
          <p>Nenhum produto cadastrado...</p>
        )}
      </Main>

      <Cart />
    </Container>
  );
}
