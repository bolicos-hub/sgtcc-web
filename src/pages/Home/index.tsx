import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES as R } from "@/constants";

import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";


const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const handleSignIn = () => navigate(R.SIGNIN());
  const handleSignUp = () => navigate(R.SIGNUP());

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>SGTCC</Title>
        <Title size="h2">Seja Bem vinde!</Title>
        <Space />
        <p>Esse é um sistema de Gerenciamento de TCC.</p>
        <Space size="x-large" />
        <Row>
          <Button onClick={handleSignUp} appearance="secondary">
            Cadastrar
          </Button>
          <Button onClick={handleSignIn}>Entrar</Button>
        </Row>
      </Container>
    </>
  );
};

export default Home;
