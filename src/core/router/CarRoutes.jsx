import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import CarAdd from '../../pages/cars/CarAdd'
import CarList from '../../pages/cars/CarList'

export default class CarRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cars/add" exact component={CarAdd} />
                <Route path="/cars/list" exact component={CarList} />
            </Switch>
        )
    }
}
