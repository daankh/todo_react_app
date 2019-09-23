import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Navigation from '../components/Navigation';
import WelcomeScreen from '../components/WelcomeScreen';
import TodosList from '../components/TodosList';
import EditTodoPage from '../components/EditTodoPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <HashRouter>
        <div>
            <Switch>
                <Route path='/' component={WelcomeScreen} exact={true} />
                <Route path='/list' component={TodosList} />
                <Route path='/:id/edit' component={EditTodoPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </HashRouter>
)

export default AppRouter;