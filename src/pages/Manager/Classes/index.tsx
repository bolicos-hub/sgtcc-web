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

const ManagerClasses: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const CARDS = {
    NEW_CLASSES: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Criar",
          onClick: () => navigate(M.CLASSES_NEW()),
        },
      },
      title: "Criar Turma",
    } as CardType,
    VIEW_CLASSES: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Ver",
          onClick: () => navigate(M.CLASSES_VIEW()),
        },
      },
      title: "Ver Turma",
    } as CardType,
    NOTES_CLASSES: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Notas",
          onClick: () => navigate(M.CLASSES_NOTES()),
        },
      },
      title: "Notas Turma",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Gerenciar Turmas</Title>
        <p>Esse é o seu dashboard de acesso para gerenciar as Turmas.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.NEW_CLASSES)}
          {newCard(CARDS.VIEW_CLASSES)}
          {newCard(CARDS.NOTES_CLASSES)}
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

export default ManagerClasses;
