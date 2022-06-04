import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ROUTES as R, MANAGER as M } from "@/constants";

// Utils PAGES
import HomePage from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import SignInPage from "@/pages/Auth/SignIn";
import SignUpPage from "@/pages/Auth/SignUp";
import NotFoundPage from "@/pages/NotFound";

import ManagerStudents from "@/pages/Manager/Students";
import ManagerClasses from "@/pages/Manager/Classes";
import ManagerProposals from "@/pages/Manager/Proposals";
import ManagerBoards from "@/pages/Manager/Boards";
import ManagerReports from "@/pages/Manager/Reports";
import ManagerTeachers from "@/pages/Manager/Teachers";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={R.HOME()} element={<HomePage />} />
        <Route path={R.SIGNIN()} element={<SignInPage />} />
        <Route path={R.SIGNUP()} element={<SignUpPage />} />
        <Route path={R.DASHBOARD()} element={<Dashboard />} />

        <Route path={R.ADMIN()} element={<NotFoundPage />} />
        <Route path={R.MANAGER()} element={<NotFoundPage />} />
        <Route path={R.STUDENT()} element={<NotFoundPage />} />
        <Route path={R.TEACHER()} element={<NotFoundPage />} />

        <Route path={M.STUDENTS()} element={<ManagerStudents />} />
        <Route path={M.STUDENTS_NEW()} element={<NotFoundPage />} />
        <Route path={M.STUDENTS_VIEW()} element={<NotFoundPage />} />
        <Route path={M.STUDENTS_NOTES()} element={<NotFoundPage />} />

        <Route path={M.CLASSES()} element={<ManagerClasses />} />
        <Route path={M.CLASSES_NEW()} element={<NotFoundPage />} />
        <Route path={M.CLASSES_VIEW()} element={<NotFoundPage />} />
        <Route path={M.CLASSES_NOTES()} element={<NotFoundPage />} />

        <Route path={M.PROPOSALS()} element={<ManagerProposals />} />
        <Route path={M.PROPOSALS_NEW()} element={<NotFoundPage />} />
        <Route path={M.PROPOSALS_VIEW()} element={<NotFoundPage />} />
        <Route path={M.PROPOSALS_NOTES()} element={<NotFoundPage />} />

        <Route path={M.BOARDS()} element={<ManagerBoards />} />
        <Route path={M.BOARDS_NEW()} element={<NotFoundPage />} />
        <Route path={M.BOARDS_VIEW()} element={<NotFoundPage />} />
        <Route path={M.BOARDS_SCHEDULED()} element={<NotFoundPage />} />

        <Route path={M.REPORTS()} element={<ManagerReports />} />
        <Route path={M.REPORTS_NEW()} element={<NotFoundPage />} />
        <Route path={M.REPORTS_VIEW()} element={<NotFoundPage />} />
        <Route path={M.REPORTS_SCHEDULED()} element={<NotFoundPage />} />

        <Route path={M.TEACHERS()} element={<ManagerTeachers />} />
        <Route path={M.TEACHERS_NEW()} element={<NotFoundPage />} />
        <Route path={M.TEACHERS_VIEW()} element={<NotFoundPage />} />
        <Route path={M.TEACHERS_SCHEDULED()} element={<NotFoundPage />} />

        <Route path={R.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
