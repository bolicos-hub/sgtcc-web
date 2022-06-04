import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MANAGER as M } from "@/constants";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import { CardType, newCard } from "@/helpers/Factory";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);
  const user = "sgtcc-prof";

  const CARDS = {
    STUDENTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Alunos",
          onClick: () => navigate(M.STUDENTS()),
        },
      },
      title: "Aluno",
    } as CardType,
    CLASSES: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Turmas",
          onClick: () => navigate(M.CLASSES()),
        },
      },
      title: "Turma",
    } as CardType,
    PROPOSALS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Propostas",
          onClick: () => navigate(M.PROPOSALS()),
        },
      },
      title: "Proposta",
    } as CardType,
    BOARDS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Bancas",
          onClick: () => navigate(M.BOARDS()),
        },
      },
      title: "Banca",
    } as CardType,
    REPORTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Relatórios",
          onClick: () => navigate(M.REPORTS()),
        },
      },
      title: "Relatório",
    } as CardType,
    TEACHERS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Professores",
          onClick: () => navigate(M.TEACHERS()),
        },
      },
      title: "Professor",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Dashboard</Title>
        <Title size="h2">Seja Bem vinde, {user}!</Title>
        <Space />
        <p>Esse é o seu dashboard de acesso para gerenciar os TCCs.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.STUDENTS)}
          {newCard(CARDS.CLASSES)}
          {newCard(CARDS.PROPOSALS)}
        </Row>
        <Space />
        <Row>
          {newCard(CARDS.BOARDS)}
          {newCard(CARDS.REPORTS)}
          {newCard(CARDS.TEACHERS)}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;