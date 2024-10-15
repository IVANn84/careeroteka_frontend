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

const Login = React.lazy(() => import('Page/Login'));
const Register = React.lazy(() => import('Page/Register'));
const VerifyEmail = React.lazy(() => import('Page/VerifyEmail'));
const VerifyPassword = React.lazy(() => import('Page/VerifyPassword'));
const EmailConfirmation = React.lazy(() => import('Page/EmailConfirmation'));
const PasswordRecovery = React.lazy(() => import('Page/PasswordRecovery'));
const PasswordRecoveryConfirmation = React.lazy(
  () => import('Page/PasswordRecoveryConfirmation'),
);
const Vacancies = React.lazy(() => import('Page/Vacancies'));
const Vacancy = React.lazy(() => import('Page/Vacancy'));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Layout>
          {({ isAuth, currentUser }) => (
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
                  {isAuth && (
                    <Switch>
                      <Route exact path="/">
                        {currentUser?.isEmailConfirmed ? (
                          <Vacancies />
                        ) : (
                          <Redirect
                            push
                            to={{
                              pathname: '/verify-email',
                              state: { email: currentUser?.email },
                            }}
                          />
                        )}
                      </Route>
                      {currentUser?.isEmailConfirmed && (
                        <Route component={Vacancy} path="/vacancies/:id(\d+)" />
                      )}
                      {!currentUser?.isEmailConfirmed && (
                        <Route component={VerifyEmail} path="/verify-email" />
                      )}
                      {!currentUser?.isEmailConfirmed && (
                        <Route
                          component={EmailConfirmation}
                          path="/confirmation_email/:uid"
                        />
                      )}
                      <Redirect push to="/" />
                    </Switch>
                  )}
                  {!isAuth && (
                    <Switch>
                      <Route component={Login} exact path="/login" />
                      <Route component={Register} exact path="/signup" />
                      <Route
                        component={PasswordRecovery}
                        exact
                        path="/password-recovery"
                      />
                      <Route
                        component={VerifyEmail}
                        exact
                        path="/verify-email"
                      />
                      <Route
                        component={VerifyPassword}
                        exact
                        path="/verify-password"
                      />
                      <Route
                        component={EmailConfirmation}
                        path="/confirmation_email/:uid"
                      />
                      <Route
                        component={PasswordRecoveryConfirmation}
                        path="/password-reset-confirm/:uid"
                      />
                      <Redirect push to="/login" />
                    </Switch>
                  )}
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
