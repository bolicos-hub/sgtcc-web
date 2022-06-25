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

const ManagerProposals: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const CARDS = {
    BOARDS_REPORTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Bancas",
          onClick: () => navigate(M.REPORTS_BOARDS()),
        },
      },
      title: "Relatório Bancas",
    } as CardType,
    NOTES_REPORTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Notas",
          onClick: () => navigate(M.REPORTS_NOTES()),
        },
      },
      title: "Relatório Notas",
    } as CardType,
    STUDENTS_REPORTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Alunos",
          onClick: () => navigate(M.REPORTS_STUDENTS()),
        },
      },
      title: "Relatório Alunos",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Gerenciar Relatórios</Title>
        <p>Esse é o seu dashboard de acesso para gerenciar as Relatórios.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.BOARDS_REPORTS)}
          {newCard(CARDS.NOTES_REPORTS)}
          {newCard(CARDS.STUDENTS_REPORTS)}
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

export default ManagerProposals;
