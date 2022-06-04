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

const ManagerStudents: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const CARDS = {
    NEW_STUDENTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Criar",
          onClick: () => navigate(M.STUDENTS_NEW()),
        },
      },
      title: "Criar Aluno",
    } as CardType,
    VIEW_STUDENTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Ver",
          onClick: () => navigate(M.STUDENTS_VIEW()),
        },
      },
      title: "Ver Aluno",
    } as CardType,
    NOTES_STUDENTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Notas",
          onClick: () => navigate(M.STUDENTS_NOTES()),
        },
      },
      title: "Notas Alunos",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Gerenciar Alunos</Title>
        <p>Esse é o seu dashboard de acesso para gerenciar os Alunos.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.NEW_STUDENTS)}
          {newCard(CARDS.VIEW_STUDENTS)}
          {newCard(CARDS.NOTES_STUDENTS)}
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

export default ManagerStudents;
