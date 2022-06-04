import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES as R } from "@/constants";

import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const handleBack = () => navigate(R.HOME());

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>SGTCC</Title>
        <Title size="h2">Página Não Encontrada!</Title>
        <Space />
        <p>Por favor volte a pagina inicial do sistema de Gerenciamento de TCC.</p>
        <Space size="x-large" />
        <Row>
          <Button onClick={handleBack} appearance="cancel">
            Voltar
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
