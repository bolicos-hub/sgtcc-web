import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES as R, MANAGER as M } from "@/constants";
import { CardType, newCard } from "@/helpers/Factory";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";

const ManagerBoards: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const CARDS = {
    NEW_BOARDS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Criar",
          onClick: () => navigate(M.BOARDS_NEW()),
        },
      },
      title: "Criar Banca",
    } as CardType,
    VIEW_BOARDS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Ver",
          onClick: () => navigate(M.BOARDS_VIEW()),
        },
      },
      title: "Ver Bancas",
    } as CardType,
    SCHEDULED_BOARDS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Agendamento",
          onClick: () => navigate(M.BOARDS_SCHEDULED()),
        },
      },
      title: "Agendamento Bancas",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Gerenciar Bancas</Title>
        <p>Esse é o seu dashboard de acesso para gerenciar as Bancas.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.NEW_BOARDS)}
          {newCard(CARDS.VIEW_BOARDS)}
          {newCard(CARDS.SCHEDULED_BOARDS)}
        </Row>
        <Space />
        <Row>
          <Button onClick={() => navigate(R.DASHBOARD())} appearance={"cancel"}>
            Voltar
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default ManagerBoards;
