import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/Login/LoginScreen';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route path='/' component={PublicRoutes} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;