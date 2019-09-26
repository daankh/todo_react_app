import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { HashRouter, Route, Switch } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';
import TodosListPage from '../components/TodosListPage';
import EditTodoPage from '../components/EditTodoPage';
import NotFoundPage from '../components/NotFoundPage';
import AddTodoPage from '../components/AddTodoPage';

const AppRouter = () => (
    <HashRouter>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ height: '100vh' }}>
                    <Switch>
                        <Route path='/' component={WelcomeScreen} exact={true} />
                        <Route path='/list' component={TodosListPage} />
                        <Route path='/add' component={AddTodoPage} />
                        <Route path='/:id/edit' component={EditTodoPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Typography>
            </Container>
        </React.Fragment>
    </HashRouter>
)

export default AppRouter;
