import { Container, Box, Footer, Title } from "./styles";
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { setEmail, setPassword, handleLogin } = useAuth();

  const [typeButton, setTypeButton] = useState("password");

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path d="M0,288L60,293.3C120,299,240,309,360,293.3C480,277,600,235,720,192C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>

      <Box>
        <Title>
          <h1>Bem-vindo ao Login</h1>
          <span>Preencha os campos, para acessar seu conteúdo</span>
        </Title>

        <label>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type={typeButton}
            placeholder="Senha..."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={() =>
              typeButton === "password"
                ? setTypeButton("text")
                : setTypeButton("password")
            }
          >
            {typeButton === "password" ? (
              <BsFillEyeSlashFill />
            ) : (
              <IoEyeSharp />
            )}
          </button>
        </label>
        <button type="submit" onClick={handleLogin}>
          Entrar
        </button>
      </Box>
      <Footer>
        Todos os direitos reservados
        <a href="https://www.instagram.com/italorodrigues_1/" target="_blank">
          @italorodrigues_1
        </a>
      </Footer>
    </Container>
  );
}
