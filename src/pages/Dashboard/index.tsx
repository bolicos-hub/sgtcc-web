import React, { useState } from "react";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";

const Dashboard: React.FC = () => {
  const [isLoading] = useState(false);
  const user = "sgtcc-prof";

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
        <Row></Row>
      </Container>
    </>
  );
};

export default Dashboard;
