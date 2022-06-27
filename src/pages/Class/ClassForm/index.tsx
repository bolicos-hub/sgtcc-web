import * as React from "react";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as MUI from "@mui/material";
import * as ICONS from "@mui/icons-material";

import Loader from "@/components/Loader";
import { generateError } from "@/helpers/Errors";
import * as REQ from "@/models/request";
import * as RES from "@/models/response";
import { BFF } from "@/services/bff";

const ClassForm: React.FC<Props> = () => {
  const firstRender = React.useRef(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [feedback, setFeedback] = React.useState<Feedback>(INITIAL_FEEDBACK);
  const [state, setState] = React.useState<State>(INITIAL_STATE);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, setFieldValue } = useFormik<Values>({
    initialValues: INITIAL_VALUES,
    validationSchema: schema,
    onSubmit: (data) => {
      console.log("AQUI => onSubmit");
      console.log(data);

      const group = {
        name: data.name,
        semesterId: data.semester.id,
        teacherId: data.teacher.registration,
        students: data.students,
      } as REQ.ClassCreated;

      setLoading(true);
      BFF.CLASS.CREATE(group)
        .then(() => handleSave())
        .catch((exception: AxiosError) => handleError(exception))
        .finally(() => setLoading(false));
    },
  });

  const fetchSemesters = React.useCallback(() => {
    setLoading(true);
    BFF.SEMESTER.LIST()
      .then((response) => updateState("semesters", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  const fetchTeachers = React.useCallback(() => {
    setLoading(true);
    BFF.TEACHER.LIST()
      .then((response) => updateState("teachers", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  const fetchStudents = React.useCallback(() => {
    setLoading(true);
    BFF.STUDENT.LIST()
      .then((response) => updateState("students", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchSemesters();
      fetchTeachers();
      fetchStudents();
    }
  }, [fetchSemesters, fetchTeachers, fetchStudents]);

  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleClose = () => setFeedback((prev) => ({ ...prev, success: false, fail: false }));
  const handleError = (exception: AxiosError) => {
    generateError(exception);
    setFeedback((prev) => ({ ...prev, fail: true }));
  };
  const handleSave = () => {
    resetForm();
    setFeedback((prev) => ({ ...prev, success: true }));
  };

  const studentsOptions = state.students.map((student) => student.registration);
  const findLabel = (id: string) => state.students.find((student) => student.registration === id);

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

        <MUI.Autocomplete
          disablePortal
          id={HTML_ID.FIELD_SEMESTER}
          options={state.semesters}
          value={values.semester || ""}
          onOpen={handleBlur}
          includeInputInList={true}
          onChange={(_e, value) => setFieldValue("semester", value || "")}
          getOptionLabel={(option) => option.name || ""}
          renderInput={(params) => (
            <MUI.TextField
              {...params}
              label="Semestre"
              variant="filled"
              value={values.semester || ""}
              error={touched.semester && !!errors.semester}
              helperText={touched.semester && errors.semester?.id}
            />
          )}
        />

        <MUI.Autocomplete
          disablePortal
          id={HTML_ID.FIELD_TEACHER}
          options={state.teachers}
          value={values.teacher || ""}
          onOpen={handleBlur}
          includeInputInList={true}
          onChange={(_e, value) => setFieldValue("teacher", value || "")}
          getOptionLabel={(option) => option?.name || ""}
          renderInput={(params) => (
            <MUI.TextField
              {...params}
              label="Professor"
              variant="filled"
              value={values.teacher || ""}
              error={touched.teacher && !!errors.teacher}
              helperText={touched.teacher && errors.teacher?.registration}
            />
          )}
        />

        <MUI.Autocomplete
          disablePortal
          id={HTML_ID.FIELD_STUDENTS}
          options={studentsOptions}
          value={values.students}
          onOpen={handleBlur}
          includeInputInList={true}
          onChange={(_e, value) => setFieldValue("students", value || "")}
          getOptionLabel={(option) => findLabel(option)?.name || ""}
          renderInput={(params) => <MUI.TextField {...params} label="Alunos" variant="filled" />}
          multiple={true}
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
  BOX: "class-box",
  FORM: "class-form",
  BUTTONS: "class-buttons",

  FIELD_NAME: "name",
  FIELD_SEMESTER: "semester",
  FIELD_TEACHER: "teacher",
  FIELD_STUDENTS: "students",

  BUTTON_SAVE: "button-class-form-save",
  BUTTON_RESET: "button-class-form-reset",
};

const TEXT = {
  LABEL_NAME: "Nome",
  BUTTON_SAVE: "Criar",
  BUTTON_RESET: "Limpar",
};

const ERROR = {
  NAME: "Nome é obrigatório.",
  TEACHER_ID: "Professor é obrigatório.",
  SEMESTER_ID: "Semestre é obrigatório.",
};

const ALERT = {
  SUCCESS: "Turma salva com sucesso!",
  FAIL: "Não conseguimos salvar a Turma :-(",
};

type Field = keyof State;
interface Props {
  children?: React.ReactNode;
}
interface Feedback {
  success: boolean;
  fail: boolean;
}
interface State {
  semesters: Array<RES.SemesterDTO>;
  teachers: Array<RES.TeacherDTO>;
  students: Array<RES.StudentDTO>;
}

interface Values {
  name: string;
  teacher: RES.TeacherDTO;
  semester: RES.SemesterDTO;
  students: Array<string>;
}

const INITIAL_VALUES: Values = {
  name: "",
  teacher: {} as RES.TeacherDTO,
  semester: {} as RES.SemesterDTO,
  students: [],
};

const INITIAL_FEEDBACK: Feedback = {
  success: false,
  fail: false,
};

const INITIAL_STATE: State = {
  semesters: [],
  teachers: [],
  students: [],
};

const schema = Yup.object().shape({
  name: Yup.string().required(ERROR.NAME),
  teacher: Yup.object().shape({
    registration: Yup.string().required(ERROR.TEACHER_ID),
  }),
  semester: Yup.object().shape({
    id: Yup.number().moreThan(0).required(ERROR.SEMESTER_ID),
  }),
});

export default ClassForm;
