import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Home from '../../pages/home/Home'

//import Login from '../../pages/authentication/Login';
import NotFound from '../../pages/home/NotFound';

const login = React.lazy(() => import('../../pages/authentication/Login'));

const cars = React.lazy(() => import('./CarRoutes'));

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Chargement en cours....</div>}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/* commentaire */}
                        <Route path="/cars" component={cars} />
                        <Route path="/auth/login" exact component={login} />
                        <Route path="/404" exact component={NotFound} />
                        <Redirect to='404' />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}
