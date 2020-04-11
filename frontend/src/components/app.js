import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav/navbar_container';
import React from 'react';
import SplashPageContainer from "./splash/splash_page_container";
import { Switch } from 'react-router-dom';
import FoodIndexContainer from '../components/food_index/food_index_container'
import {Route} from "react-router-dom"
import newRestaurantForm from "../components/new_restaurant/new_restaurant"

const App = () => (
    <div>
        <Modal />
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={SplashPageContainer} redirect = '/index'/>
			<ProtectedRoute exact path = "/index" component={FoodIndexContainer} redirect = '/'/>
			<Route exact path="/new-restaurant" component={newRestaurantForm} />
        </Switch>
    </div>
);

export default App;