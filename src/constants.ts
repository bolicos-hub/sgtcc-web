export const WEB_APP = {
  NAME: process.env.REACT_APP_NAME,
  ENVIRONMENT: process.env.REACT_APP_ENV,
  BASE_URL: process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL_PRD : process.env.REACT_APP_BASE_URL,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  API_AUTH_URL: process.env.REACT_APP_API_AUTH_URL,
};

export const MUI_ROUTES = {
  HOME: () => "/",
  NOT_FOUND: () => "/*",
  SIGNIN: () => "/sign-in",
  SIGNUP: () => "/sign-up",
  STUDENTS: () => "/students",
  TEACHERS: () => "/teachers",
  BOARDS: () => "/boards",
  CLASSES: () => "/classes",
  REPORTS: () => "/reports",
  PROPOSALS: () => "/proposals",
};

export const ADMIN_PREFIX = "/admin";
export const MANAGER_PREFIX = "/manager";
export const STUDENT_PREFIX = "/student";
export const TEACHER_PREFIX = "/teacher";

export const ROUTES = {
  HOME: () => "/",
  SIGNIN: () => "/sign-in",
  SIGNUP: () => "/sign-up",
  NOT_FOUND: () => "/*",
  DASHBOARD: () => "/dashboard",
  PRIVATE: () => "/private",

  ADMIN: () => ADMIN_PREFIX,
  MANAGER: () => MANAGER_PREFIX,
  STUDENT: () => STUDENT_PREFIX,
  TEACHER: () => TEACHER_PREFIX,
};

export const MANAGER = {
  BOARDS: () => `${MANAGER_PREFIX}/boards`,
  BOARDS_NEW: () => `${MANAGER_PREFIX}/boards/new`,
  BOARDS_VIEW: () => `${MANAGER_PREFIX}/boards/view`,
  BOARDS_SCHEDULED: () => `${MANAGER_PREFIX}/boards/scheduled`,

  CLASSES: () => `${MANAGER_PREFIX}/classes`,
  CLASSES_NEW: () => `${MANAGER_PREFIX}/classes/new`,
  CLASSES_VIEW: () => `${MANAGER_PREFIX}/classes/view`,
  CLASSES_NOTES: () => `${MANAGER_PREFIX}/classes/notes`,

  PROPOSALS: () => `${MANAGER_PREFIX}/proposals`,
  PROPOSALS_ACTIVE: () => `${MANAGER_PREFIX}/proposals/active`,
  PROPOSALS_PENDING: () => `${MANAGER_PREFIX}/proposals/pending`,
  PROPOSALS_HISTORY: () => `${MANAGER_PREFIX}/proposals/history`,

  REPORTS: () => `${MANAGER_PREFIX}/reports`,
  REPORTS_BOARDS: () => `${MANAGER_PREFIX}/reports/boards`,
  REPORTS_NOTES: () => `${MANAGER_PREFIX}/reports/notes`,
  REPORTS_STUDENTS: () => `${MANAGER_PREFIX}/reports/students`,

  STUDENTS: () => `${MANAGER_PREFIX}/students`,
  STUDENTS_NEW: () => `${MANAGER_PREFIX}/students/new`,
  STUDENTS_VIEW: () => `${MANAGER_PREFIX}/students/view`,
  STUDENTS_NOTES: () => `${MANAGER_PREFIX}/students/notes`,

  TEACHERS: () => `${MANAGER_PREFIX}/teachers`,
  TEACHERS_SUGGESTIONS_NEW: () => `${MANAGER_PREFIX}/teachers/suggestions/new`,
  TEACHERS_INTEREST_AREAS_NEW: () => `${MANAGER_PREFIX}/teachers/interest-areas/new`,
  TEACHERS_INTEREST_AREAS_LINK: () => `${MANAGER_PREFIX}/teachers/interest-areas/link`,
};
