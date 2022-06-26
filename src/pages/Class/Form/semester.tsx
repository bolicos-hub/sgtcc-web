import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as MUI from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import * as REQ from "@/models/request";

const SemesterForm: React.FC<Props> = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<Values>({
    initialValues: INITIAL_VALUES,
    validationSchema: schema,
    onSubmit: (data) => {
      console.log("AQUI => onSubmit");
      console.log(data);

      const semester = {
        name: values.name,
      } as REQ.SemesterCreated;

      console.log(semester);
    },
  });

  return (
    <MUI.Box id={HTML_ID.BOX}>
      <MUI.Stack id={HTML_ID.FORM} onSubmit={handleSubmit} component="form" spacing={3}>
        <MUI.TextField
          id={HTML_ID.FIELD_NAME}
          label={TEXT.LABEL_NAME}
          variant="filled"
          value={values.name || ""}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <MUI.Button id={HTML_ID.BUTTON_SAVE} variant="contained" type={"submit"} startIcon={<DoneIcon />}>
          {TEXT.BUTTON_SAVE}
        </MUI.Button>
      </MUI.Stack>
    </MUI.Box>
  );
};

interface Props {
  children?: React.ReactNode;
}

interface Values {
  name: string;
}

const INITIAL_VALUES = {
  name: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Selecione o produto que deseja precificar."),
});

const HTML_ID = {
  BOX: "semester-box",
  FORM: "semester-form",
  FIELD_NAME: "name",
  BUTTON_SAVE: "button-semester-form",
};

const TEXT = {
  LABEL_NAME: "Nome",
  BUTTON_SAVE: "Criar",
};

export default SemesterForm;
