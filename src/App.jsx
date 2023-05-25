import React, { Suspense } from 'react';
import { ThemeProvider } from 'react-jss';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';

import Layout from 'Component/Layout/index.jsx';
import { PageSkeleton } from 'Component/Skeleton';
import ScrollToTop from 'Component/ScrollToTop';
import ErrorBoundary from 'Component/ErrorBoundary';
import Theme from './themes/default';

const Main = React.lazy(() => import('Page/Main'));
const Survey = React.lazy(() => import('Page/Survey'));
const Login = React.lazy(() => import('Page/Login'));
const Register = React.lazy(() => import('Page/Register'));
const Profession = React.lazy(() => import('Page/Profession'));
const Onboarding = React.lazy(() => import('Page/Onboarding'));
const VerifyEmail = React.lazy(() => import('Page/VerifyEmail'));

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
                  <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/survey" component={Survey} />
                    <Route
                      path="/professions/:id(\d+)"
                      component={Profession}
                    />
                    {!isAuth && (
                      <>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Register} />
                      </>
                    )}
                    {isAuth && !currentUser?.isOnboardingDone && (
                      <Route path="/onboarding" component={Onboarding} />
                    )}
                    {isAuth && !currentUser?.isEmailConfirmed && (
                      <Route path="/verify-email" component={VerifyEmail} />
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
