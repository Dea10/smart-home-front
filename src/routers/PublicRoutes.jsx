import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AboutUs from '../components/common/AboutUs/AboutUs';
import Navbar from '../components/common/Navbar/Navbar';
import DevicesScreen from '../components/Devices/DevicesScreen';
import styles from './PublicRoutes.module.scss';

const PublicRoutes = () => {
    return (
        <>
            <Navbar />
            <div className={styles.content}>
                <Switch>
                    <Route exact path='/devices' component={ DevicesScreen } />
                    <Route exact path='/about' component={ AboutUs } />

                    <Redirect to='/devices' />
                </Switch>
            </div>
        </>
    );
}

export default PublicRoutes;