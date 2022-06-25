export const ENDPOINTS = {
  SIGN_IN: () => "/api/login",
  
  TYPE_LIST: () => "/api/v1/types",

  TITLE_LIST: () => "/api/v1/titles",

  CLASS_LIST: () => "/api/v1/classes",

  TEACHER_LIST: () => "/api/v1/teachers",
  TEACHER_CREATE: () => "/api/v1/teachers",
  TEACHER_DETAILS: (id: string) => `/api/v1/teachers/${id}`,
  TEACHER_EDIT: (id: string) => `/api/v1/teachers/${id}`,

  STUDENT_LIST: () => "/api/v1/students",
  STUDENT_CREATE: () => "/api/v1/students",
  STUDENT_DETAILS: (id: string) => `/api/v1/students/${id}`,
  STUDENT_EDIT: (id: string) => `/api/v1/students/${id}`,

  PROPOSAL_LIST: () => "/api/v1/proposals",
  PROPOSAL_CREATE: () => "/api/v1/proposals",
  PROPOSAL_DETAILS: (id: string) => `/api/v1/proposals/${id}`,
  PROPOSAL_EDIT: (id: string) => `/api/v1/proposals/${id}`,

  EXAMINATION_CREATE: () => "/api/v1/examinations",
  EXAMINATION_DETAILS: (id: string) => `/api/v1/examinations/${id}`,
  EXAMINATION_EDIT: (id: string) => `/api/v1/examinations/${id}`,

  BOARD_CREATE: () => "/api/v1/boards",
  BOARD_DETAILS: (id: string) => `/api/v1/boards/${id}`,
  BOARD_EDIT: (id: string) => `/api/v1/boards/${id}`,
};

export default ENDPOINTS;
