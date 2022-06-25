import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { MANAGER as M } from "@/constants";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Space from "@/components/Space";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface Values {
  registration: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

const ManagerStudents: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState(false);

  const validationSchema = Yup.object().shape({
    registration: Yup.string().required("Matricula obrigatória."),
    name: Yup.string().required("Nome obrigatório."),
    email: Yup.string().required("Email obrigatório."),
    phone: Yup.string().required("Celular obrigatório."),
    cpf: Yup.string().required("CPF obrigatório."),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik<Values>({
    initialValues: {
      registration: "",
      name: "",
      email: "",
      phone: "",
      cpf: "",
    },
    validationSchema: validationSchema,
    onSubmit() {
      setForm(true);
    },
  });

  const saveStudent = useCallback(() => {
    setLoading(true);

    const save = `${values.registration}/${values.name}`;
    console.log("SAVED: ", save);

    setForm(false);
    setLoading(false);
  }, [values]);

  useEffect(() => {
    if (form) saveStudent();
  }, [saveStudent, form]);

  const backToStudents = () => navigate(M.STUDENTS());

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Title>Criar Aluno</Title>
          <p>Esse é o formulário para criar um novo Aluno.</p>
          <Space size="x-large" />
          <Row>
            <Input
              required={true}
              label={"Matricula"}
              name={"registration"}
              value={values.registration}
              errorMessage={touched.registration && errors.registration}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Input
              required={true}
              label={"Nome"}
              name={"name"}
              value={values.name}
              errorMessage={touched.name && errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Input
              required={true}
              label={"Email"}
              name={"email"}
              value={values.email}
              errorMessage={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Input
              required={true}
              label={"Celular"}
              name={"phone"}
              value={values.phone}
              errorMessage={touched.phone && errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Input
              required={true}
              label={"CPF"}
              name={"cpf"}
              value={values.cpf}
              errorMessage={touched.cpf && errors.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Button onClick={backToStudents} appearance={"cancel"}>
              Voltar
            </Button>
            <Button type={"submit"} appearance={"primary"}>
              Salvar
            </Button>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default ManagerStudents;
