import React, { useState } from "react";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Card, { Props as CardProps } from "@/components/Card";

type CardType = {
  card: CardProps;
  title: string;
};

const Dashboard: React.FC = () => {
  const [isLoading] = useState(false);
  const user = "sgtcc-prof";

  const newCard = (type: CardType) => {
    return (
      <Card {...type.card}>
        <Title size="h4">{type.title}</Title>
      </Card>
    );
  };

  const CARDS = {
    STUDENTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Alunos",
        }
      },
      title: 'Aluno',
    } as CardType,
    CLASSES: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Turmas",
        }
      },
      title: 'Turma',
    } as CardType,
    PROPOSALS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Propostas",
        }
      },
      title: 'Proposta',
    } as CardType,
    BOARDS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Bancas",
        }
      },
      title: 'Banca',
    } as CardType,
    REPORTS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Relatórios",
        }
      },
      title: 'Relatório',
    } as CardType,
    TEACHERS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Gerenciar Professores",
        }
      },
      title: 'Professor',
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
