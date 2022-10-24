import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-jss';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import store from './store';
import Theme from './themes/default';

import Layout from 'Component/Layout';

const Main = React.lazy(() => import('Page/Main'));
const Login = React.lazy(() => import('Page/Login'));

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={Main}/>
                            <Route
                                path="/login"
                                component={Login}/>
                            <Redirect
                                from="*"
                                push
                                to="/"/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
