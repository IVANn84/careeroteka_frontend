import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-jss';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import store from './store';
import Theme from './themes/default';

import Layout from 'Component/Layout';
import Preloader from 'Component/Preloader';

const Main = React.lazy(() => import('Page/Main'));
const Login = React.lazy(() => import('Page/Login'));

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        {({isAuth}) => (
                            <Suspense fallback={<Preloader isDisplayed isAbsolute/>}>
                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        component={Main}/>
                                    {!isAuth && (
                                        <Route
                                            path="/login"
                                            component={Login}/>
                                    )}
                                    <Redirect
                                        from="*"
                                        push
                                        to="/"/>
                                </Switch>
                            </Suspense>
                        )}
                    </Layout>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
