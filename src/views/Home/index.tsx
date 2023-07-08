import { Container, Header, Logo, Logout, Main, TitleLogo } from "./styles";
import Search from "../../components/Search";
import MenuCard from "../../components/MenuCard";
import SirenLogo from "../../assets/siren.svg";
import Cart from "../../components/Cart";
import CardProducts from "../../components/CardProducts";
import { useEffect, useContext } from "react";
import {
  ProductsContext,
  ProductsContextData,
} from "../../context/productsContext";
import { AuthContext, AuthContextData } from "../../context";

type PropsProduct = {
  _id: string | number;
  name: string;
  description?: string;
  price: string | number;
  image: string;
};

export default function Home() {
  const { products, getProducts, getCategory } = useContext(
    ProductsContext
  ) as ProductsContextData;

  const { authenticate, handleLogout } = useContext(
    AuthContext
  ) as AuthContextData;

  useEffect(() => {
    getProducts();
    getCategory();
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
          {authenticate && (
            <Logout>
              <button type="button" onClick={handleLogout}>
                Sair
              </button>
            </Logout>
          )}
        </Logo>
        <Search />
      </Header>

      <Main>
        <MenuCard />

        {authenticate && <CardProducts option="admin" />}

        {products.length > 0 ? (
          products?.map((product: PropsProduct) => (
            <div key={product?._id}>
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
