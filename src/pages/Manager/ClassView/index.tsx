import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MANAGER as M } from "@/constants";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Input from "@/components/Input";

const ManagerClassView: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <Title>Visualizar Turma</Title>
        <p>Esse é o formulário para criar uma nova Turma.</p>
        <Space size="x-large" />
        <Row>
          <Input required label={"Nome"} />
        </Row>
        <Space />
        <Row>
          <Input required label={"Primeiro Professor"} />
        </Row>
        <Space />
        <Row>
          <Input required label={"Segundo Nome"} />
        </Row>
        <Space />
        <Row>
          <Button onClick={() => navigate(M.CLASSES())} appearance={"cancel"}>
            Voltar
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default ManagerClassView;
