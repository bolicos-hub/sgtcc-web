import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Loader from "@/components/Loader";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ROUTES } from "@/constants";
import * as Yup from "yup";

interface Values {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Usuário obrigatório."),
    password: Yup.string().required("Senha obrigatória."),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik<Values>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit() {
      if (values.username === "sgtcc" && values.password === "12345") forwardToDashboard();
      else alert("Usuario ou senha errado!");
    },
  });

  const backToHome = () => navigate(ROUTES.HOME());
  const forwardToDashboard = () => navigate(ROUTES.DASHBOARD());

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Title>Entrar</Title>
          <Title size="h2">Aqui você pode acessar o sistema!</Title>
          <Space />
          <p>Entre com suas credencias de acesso.</p>
          <Space size="x-large" />
          <Row>
            <Input
              required={true}
              label={"Nome"}
              name={"username"}
              value={values.username}
              errorMessage={touched.username && errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              required={true}
              label={"Senha"}
              name={"password"}
              value={values.password}
              errorMessage={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space size="x-large" />
          <Row>
            <Button onClick={backToHome} appearance={"cancel"}>
              Voltar
            </Button>
            <Button type={"submit"}>Avançar</Button>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default SignIn;
