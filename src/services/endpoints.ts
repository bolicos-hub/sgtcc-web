const ENDPOINTS = {
  SIGN_IN: () => "/api/login",

  SEMESTERS: "/api/semesters",
  SEMESTERS_ID: (id: number) => `/api/semesters/${id}`,

  CLASSES: "/api/classes",
  CLASSES_ID: (id: number) => `/api/classes/${id}`,

  TEACHERS: "/api/teachers",
  TEACHERS_ID: (id: number) => `/api/teachers/${id}`,

  STUDENT: "/api/students",
  STUDENT_ID: (id: string) => `/api/students/${id}`,
};

export default ENDPOINTS;
