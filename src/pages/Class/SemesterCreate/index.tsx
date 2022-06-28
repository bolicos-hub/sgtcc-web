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

const SemesterCreate: React.FC<Props> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [feedback, setFeedback] = React.useState<Feedback>(INITIAL_FEEDBACK);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik<REQ.SemesterCreated>({
    initialValues: INITIAL_VALUES,
    validationSchema: schema,
    onSubmit: (data) => {
      const semester = {
        name: data.name,
      } as REQ.SemesterCreated;

      setLoading(true);
      BFF.SEMESTER.CREATE(semester)
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

        <MUI.Stack id={HTML_ID.BUTTONS} spacing={2}>
          <MUI.Button id={HTML_ID.BUTTON_RESET} variant="contained" onClick={() => resetForm()} startIcon={<ICONS.Delete />} color={"warning"}>
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
  BOX: "semester-box",
  FORM: "semester-form",
  BUTTONS: "semester-buttons",

  FIELD_NAME: "name",

  BUTTON_SAVE: "button-semester-form-save",
  BUTTON_RESET: "button-semester-form-reset",
};

const TEXT = {
  LABEL_NAME: "Nome",
  BUTTON_SAVE: "Criar",
  BUTTON_RESET: "Limpar",
};

const ERROR = {
  NAME: "Nome é obrigatório.",
};

const ALERT = {
  SUCCESS: "Semestre salvo com sucesso!",
  FAIL: "Não conseguimos salvar o semestre :-(",
};

interface Props {
  children?: React.ReactNode;
}

interface Feedback {
  success: boolean;
  fail: boolean;
}

const INITIAL_VALUES: REQ.SemesterCreated = {
  name: "",
};

const INITIAL_FEEDBACK: Feedback = {
  success: false,
  fail: false,
};

const schema = Yup.object().shape({
  name: Yup.string().required(ERROR.NAME),
});

export default SemesterCreate;
