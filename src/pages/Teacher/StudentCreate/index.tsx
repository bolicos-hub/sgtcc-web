import * as React from "react";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as MUI from "@mui/material";
import * as ICONS from "@mui/icons-material";

import Loader from "@/components/Loader";
import { generateError } from "@/helpers/Errors";
import * as REQ from "@/models/request";
import { BFF } from "@/services/bff";

const StudentCreate: React.FC<Props> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [feedback, setFeedback] = React.useState<Feedback>(INITIAL_FEEDBACK);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik<REQ.TeacherCreated>({
    initialValues: INITIAL_VALUES,
    validationSchema: schema,
    onSubmit: (data) => {
      const teacher = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        registration: data.registration,
        lattes: data.lattes,
      } as REQ.TeacherCreated;

      setLoading(true);
      BFF.TEACHER.CREATE(teacher)
        .then(() => handleSave())
        .catch((exception: AxiosError) => handleError(exception))
        .finally(() => setLoading(false));
    },
  });

  const handleClose = () => setFeedback((prev) => ({ ...prev, success: false, fail: false }));
  const handleError = (exception: AxiosError) => {
    generateError(exception);
    setFeedback((prev) => ({ ...prev, fail: true }));
  };
  const handleSave = () => {
    resetForm();
    setFeedback((prev) => ({ ...prev, success: true }));
  };

  return (
    <MUI.Box id={HTML_ID.BOX}>
      <>
        <Loader open={isLoading} />
        <MUI.Snackbar open={feedback.success} autoHideDuration={6000} onClose={handleClose}>
          <MUI.Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {ALERT.SUCCESS}
          </MUI.Alert>
        </MUI.Snackbar>
        <MUI.Snackbar open={feedback.fail} autoHideDuration={6000} onClose={handleClose}>
          <MUI.Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {ALERT.FAIL}
          </MUI.Alert>
        </MUI.Snackbar>
      </>

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

        <MUI.TextField
          id={HTML_ID.FIELD_EMAIL}
          label={TEXT.LABEL_EMAIL}
          variant="filled"
          value={values.email || ""}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <MUI.TextField
          id={HTML_ID.FIELD_PHONE}
          label={TEXT.LABEL_PHONE}
          variant="filled"
          value={values.phone || ""}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <MUI.TextField
          id={HTML_ID.FIELD_REGISTRATION}
          label={TEXT.LABEL_REGISTRATION}
          variant="filled"
          value={values.registration || ""}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.registration && !!errors.registration}
          helperText={touched.registration && errors.registration}
        />
        <MUI.TextField
          id={HTML_ID.FIELD_LATTES}
          label={TEXT.LABEL_LATTES}
          variant="filled"
          value={values.lattes || ""}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.lattes && !!errors.lattes}
          helperText={touched.lattes && errors.lattes}
        />

        <MUI.Stack id={HTML_ID.BUTTONS} spacing={2}>
          <MUI.Button
            id={HTML_ID.BUTTON_RESET}
            variant="contained"
            onClick={() => resetForm()}
            startIcon={<ICONS.Delete />}
            color={"warning"}>
            {TEXT.BUTTON_RESET}
          </MUI.Button>
          <MUI.Button id={HTML_ID.BUTTON_SAVE} variant="contained" type={"submit"} startIcon={<ICONS.Send />}>
            {TEXT.BUTTON_SAVE}
          </MUI.Button>
        </MUI.Stack>
      </MUI.Stack>
    </MUI.Box>
  );
};

const HTML_ID = {
  BOX: "student-box",
  FORM: "student-form",
  BUTTONS: "student-buttons",

  FIELD_NAME: "name",
  FIELD_EMAIL: "email",
  FIELD_PHONE: "phone",
  FIELD_REGISTRATION: "registration",
  FIELD_LATTES: "lattes",

  BUTTON_SAVE: "button-student-form-save",
  BUTTON_RESET: "button-student-form-reset",
};

const TEXT = {
  LABEL_NAME: "Nome",
  LABEL_EMAIL: "Email",
  LABEL_PHONE: "Celular",
  LABEL_REGISTRATION: "Matricula",
  LABEL_LATTES: "Lattes",

  BUTTON_SAVE: "Criar",
  BUTTON_RESET: "Limpar",
};

const ERROR = {
  NAME: "Nome é obrigatório.",
  EMAIL: "Email é obrigatório.",
  PHONE: "Celular é obrigatório.",
  RESGISTRATION: "Matricula é obrigatória.",
  LATTES: "Lattes é obrigatório.",
};

const ALERT = {
  SUCCESS: "Professor(a) salvo com sucesso!",
  FAIL: "Não conseguimos salvar o professor(a) :-(",
};

interface Props {
  children?: React.ReactNode;
}

interface Feedback {
  success: boolean;
  fail: boolean;
}

const INITIAL_VALUES: REQ.TeacherCreated = {
  name: "",
  email: "",
  phone: "",
  registration: "",
  lattes: "",
};

const INITIAL_FEEDBACK: Feedback = {
  success: false,
  fail: false,
};

const schema = Yup.object().shape({
  name: Yup.string().required(ERROR.NAME),
  email: Yup.string().required(ERROR.EMAIL),
  phone: Yup.string().required(ERROR.PHONE),
  registration: Yup.string().required(ERROR.RESGISTRATION),
  lattes: Yup.string().required(ERROR.RESGISTRATION),
});

export default StudentCreate;
