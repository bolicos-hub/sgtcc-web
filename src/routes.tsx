import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ROUTES as R, MANAGER as M } from "@/constants";

// Utils PAGES
import HomePage from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import SignInPage from "@/pages/Auth/SignIn";
import SignUpPage from "@/pages/Auth/SignUp";
import NotFoundPage from "@/pages/NotFound";

import ManagerBoards from "@/pages/Manager/Boards";
import ManagerBoardNew from "@/pages/Manager/BoardNew";
import ManagerBoardScheduled from "@/pages/Manager/BoardScheduled";
import ManagerBoardView from "@/pages/Manager/BoardView";

import ManagerClasses from "@/pages/Manager/Classes";
import ManagerClassNew from "@/pages/Manager/ClassNew";
import ManagerClassNotes from "@/pages/Manager/ClassNotes";
import ManagerClassView from "@/pages/Manager/ClassView";

import ManagerProposals from "@/pages/Manager/Proposals";
import ManagerProposalActive from "@/pages/Manager/ProposalActive";
import ManagerProposalHistory from "@/pages/Manager/ProposalHistory";
import ManagerProposalPending from "@/pages/Manager/ProposalPending";

import ManagerReports from "@/pages/Manager/Reports";
import ManagerReportBoards from "@/pages/Manager/ReportBoards";
import ManagerReportNotes from "@/pages/Manager/ReportNotes";
import ManagerReportStudents from "@/pages/Manager/ReportStudents";

import ManagerStudents from "@/pages/Manager/Students";
import ManagerStudentNew from "@/pages/Manager/StudentNew";
import ManagerStudentNotes from "@/pages/Manager/StudentNotes";
import ManagerStudentView from "@/pages/Manager/StudentView";

import ManagerTeachers from "@/pages/Manager/Teachers";
import ManagerTeacherInterestAreasLink from "@/pages/Manager/TeacherInterestAreasLink";
import ManagerTeacherInterestAreasNew from "@/pages/Manager/TeacherInterestAreasNew";
import ManagerTeacherSuggestionsNew from "@/pages/Manager/TeacherSuggestionsNew";

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

        <Route path={M.BOARDS()} element={<ManagerBoards />} />
        <Route path={M.BOARDS_NEW()} element={<ManagerBoardNew />} />
        <Route path={M.BOARDS_SCHEDULED()} element={<ManagerBoardScheduled />} />
        <Route path={M.BOARDS_VIEW()} element={<ManagerBoardView />} />

        <Route path={M.CLASSES()} element={<ManagerClasses />} />
        <Route path={M.CLASSES_NEW()} element={<ManagerClassNew />} />
        <Route path={M.CLASSES_NOTES()} element={<ManagerClassNotes />} />
        <Route path={M.CLASSES_VIEW()} element={<ManagerClassView />} />

        <Route path={M.PROPOSALS()} element={<ManagerProposals />} />
        <Route path={M.PROPOSALS_ACTIVE()} element={<ManagerProposalActive />} />
        <Route path={M.PROPOSALS_HISTORY()} element={<ManagerProposalHistory />} />
        <Route path={M.PROPOSALS_PENDING()} element={<ManagerProposalPending />} />

        <Route path={M.REPORTS()} element={<ManagerReports />} />
        <Route path={M.REPORTS_BOARDS()} element={<ManagerReportBoards />} />
        <Route path={M.REPORTS_NOTES()} element={<ManagerReportNotes />} />
        <Route path={M.REPORTS_STUDENTS()} element={<ManagerReportStudents />} />

        <Route path={M.STUDENTS()} element={<ManagerStudents />} />
        <Route path={M.STUDENTS_NEW()} element={<ManagerStudentNew />} />
        <Route path={M.STUDENTS_NOTES()} element={<ManagerStudentNotes />} />
        <Route path={M.STUDENTS_VIEW()} element={<ManagerStudentView />} />
        
        <Route path={M.TEACHERS()} element={<ManagerTeachers />} />
        <Route path={M.TEACHERS_INTEREST_AREAS_LINK()} element={<ManagerTeacherInterestAreasLink />} />
        <Route path={M.TEACHERS_INTEREST_AREAS_NEW()} element={<ManagerTeacherInterestAreasNew />} />
        <Route path={M.TEACHERS_SUGGESTIONS_NEW()} element={<ManagerTeacherSuggestionsNew />} />

        <Route path={R.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
