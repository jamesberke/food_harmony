import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav/navbar_container';
import React from 'react';
import SplashPageContainer from "./splash/splash_page";
import { Switch } from 'react-router-dom';


const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPageContainer} />
        </Switch>
    </div>
);

export default App;