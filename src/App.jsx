import React, {Suspense} from 'react';
import {ThemeProvider} from 'react-jss';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import Theme from './themes/default';

import Layout from 'Component/Layout';
import {PageSkeleton} from 'Component/Skeleton';
import ScrollToTop from 'Component/ScrollToTop';
import ErrorBoundary from 'Component/ErrorBoundary';

const Main = React.lazy(() => import('Page/Main'));
const Survey = React.lazy(() => import('Page/Survey'));
const Login = React.lazy(() => import('Page/Login'));
const Profession = React.lazy(() => import('Page/Profession'));

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Layout>
                    {({isAuth}) => (
                        <ErrorBoundary style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 500,
                        }}>
                            <Suspense fallback={<PageSkeleton/>}>
                                <ScrollToTop>
                                    <Switch>
                                        <Route
                                            path='/'
                                            exact
                                            component={Main}/>
                                        <Route
                                            path='/survey'
                                            component={Survey}/>
                                        <Route
                                            path='/professions/:id(\d+)'
                                            component={Profession}/>
                                        {!isAuth && (
                                            <Route
                                                path='/login'
                                                component={Login}/>
                                        )}
                                        <Redirect
                                            from='*'
                                            push
                                            to='/'/>
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
