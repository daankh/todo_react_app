import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { HashRouter, Route, Switch } from 'react-router-dom';
import WelcomeScreen from '../components/Pages/WelcomeScreen';
import TodosListPage from '../components/Pages/TodosListPage';
import EditTodoPage from '../components/Pages/EditTodoPage';
import NotFoundPage from '../components/Pages/NotFoundPage';
import AddTodoPage from '../components/Pages/AddTodoPage';

const AppRouter = () => (
  <HashRouter>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper>
          <Typography component="div" style={{ height: '100vh' }}>
            <Switch>
              <Route path='/' component={WelcomeScreen} exact={true} />
              <Route path='/list' component={TodosListPage} />
              <Route path='/add' component={AddTodoPage} />
              <Route path='/:id/edit' component={EditTodoPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  </HashRouter>
)

export default AppRouter;
