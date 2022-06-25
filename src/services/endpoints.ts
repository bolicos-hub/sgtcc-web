export const ENDPOINTS = {
  SIGN_IN: () => "/api/login",

  SEMESTERS: "/api/semesters",
  SEMESTERS_ID: (id: number) => `/api/semesters/${id}`,

  TYPE_LIST: () => "/api/types",

  TITLE_LIST: () => "/api/titles",

  CLASS_LIST: () => "/api/classes",

  TEACHER_LIST: () => "/api/teachers",
  TEACHER_CREATE: () => "/api/teachers",
  TEACHER_DETAILS: (id: string) => `/api/teachers/${id}`,
  TEACHER_EDIT: (id: string) => `/api/teachers/${id}`,

  STUDENT_LIST: () => "/api/students",
  STUDENT_CREATE: () => "/api/students",
  STUDENT_DETAILS: (id: string) => `/api/students/${id}`,
  STUDENT_EDIT: (id: string) => `/api/students/${id}`,

  PROPOSAL_LIST: () => "/api/proposals",
  PROPOSAL_CREATE: () => "/api/proposals",
  PROPOSAL_DETAILS: (id: string) => `/api/proposals/${id}`,
  PROPOSAL_EDIT: (id: string) => `/api/proposals/${id}`,

  EXAMINATION_CREATE: () => "/api/examinations",
  EXAMINATION_DETAILS: (id: string) => `/api/examinations/${id}`,
  EXAMINATION_EDIT: (id: string) => `/api/examinations/${id}`,

  BOARD_CREATE: () => "/api/boards",
  BOARD_DETAILS: (id: string) => `/api/boards/${id}`,
  BOARD_EDIT: (id: string) => `/api/boards/${id}`,
};

export default ENDPOINTS;
