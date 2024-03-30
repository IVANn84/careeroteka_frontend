import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import React, { Suspense } from 'react';

import { PageSkeleton } from 'Component/Skeleton';
import ScrollToTop from 'Component/ScrollToTop';
import Layout from 'Component/Layout';
import ErrorBoundary from 'Component/ErrorBoundary';

import { Theme } from './themes/theme';

const Main = React.lazy(() => import('Page/Main'));
const Survey = React.lazy(() => import('Page/Survey'));
const Login = React.lazy(() => import('Page/Login'));
const Register = React.lazy(() => import('Page/Register'));
const Profession = React.lazy(() => import('Page/Profession'));
const Onboarding = React.lazy(() => import('Page/Onboarding'));
const VerifyEmail = React.lazy(() => import('Page/VerifyEmail'));
const Vacancies = React.lazy(() => import('Page/Vacancies'));
const Vacancy = React.lazy(() => import('Page/Vacancy'));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Layout>
          {({
            isAuth,
            currentUser,
          }) => (
            <ErrorBoundary
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 500,
              }}
            >
              <Suspense fallback={<PageSkeleton />}>
                <ScrollToTop>
                  <Switch>
                    <Route component={Main} exact path="/" />
                    <Route component={Survey} path="/survey" />
                    <Route component={Vacancies} exact path="/vacancies" />
                    <Route component={Vacancy} path="/vacancies/:id(\d+)" />
                    <Route component={Profession} path="/professions/:id(\d+)" />
                    {!isAuth && (
                      <Route component={Register} path="/signup" />
                    )}
                    {!isAuth && (
                      <Route component={Login} path="/login" />
                    )}
                    {isAuth && !currentUser?.isOnboardingDone && (
                      <Route component={Onboarding} path="/onboarding" />
                    )}
                    {isAuth && !currentUser?.isEmailConfirmed && (
                      <Route component={VerifyEmail} path="/verify-email" />
                    )}
                    <Redirect from="*" push to="/" />
                  </Switch>
                </ScrollToTop>
              </Suspense>
            </ErrorBoundary>
          )}
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
