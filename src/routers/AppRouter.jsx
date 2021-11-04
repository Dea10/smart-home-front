import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DevicesScreen from '../components/Devices/DevicesScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route path='/' component={DevicesScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;