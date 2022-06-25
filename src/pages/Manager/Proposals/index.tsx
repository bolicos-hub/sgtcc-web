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
    ACTIVE_PROPOSALS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Ativas",
          onClick: () => navigate(M.PROPOSALS_ACTIVE()),
        },
      },
      title: "Propostas Ativas",
    } as CardType,
    PENDING_PROPOSALS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Pendentes",
          onClick: () => navigate(M.PROPOSALS_PENDING()),
        },
      },
      title: "Propostas Pendentes",
    } as CardType,
    HITORY_PROPOSALS: {
      card: {
        primaryButton: {
          appearance: "primary",
          children: "Histórico",
          onClick: () => navigate(M.PROPOSALS_HISTORY()),
        },
      },
      title: "Histórico Propostas",
    } as CardType,
  };

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Gerenciar Propostas</Title>
        <p>Esse é o seu dashboard de acesso para gerenciar as Propostas.</p>
        <Space size="x-large" />
        <Row>
          {newCard(CARDS.ACTIVE_PROPOSALS)}
          {newCard(CARDS.PENDING_PROPOSALS)}
          {newCard(CARDS.HITORY_PROPOSALS)}
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
