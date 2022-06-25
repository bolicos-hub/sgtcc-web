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
  name: string;
  semester: string;
}

const ManagerClassNew: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório."),
    semester: Yup.string().required("Semestre obrigatório."),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik<Values>({
    initialValues: {
      name: "",
      semester: "",
    },
    validationSchema: validationSchema,
    onSubmit() {
      setForm(true);
    },
  });

  const saveClass = useCallback(() => {
    setLoading(true);

    const save = `${values.name}/${values.semester}`;
    console.log("SAVED: ", save);

    setForm(false);
    setLoading(false);
  }, [values]);

  useEffect(() => {
    if (form) saveClass();
  }, [saveClass, form]);

  const backToClasses = () => navigate(M.CLASSES());

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Title>Criar Turma</Title>
          <p>Esse é o formulário para criar uma nova Turma.</p>
          <Space size="x-large" />
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
              label={"Semestre"}
              name={"semester"}
              value={values.semester}
              errorMessage={touched.semester && errors.semester}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Row>
          <Space />
          <Row>
            <Button onClick={backToClasses} appearance={"cancel"}>
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

export default ManagerClassNew;
