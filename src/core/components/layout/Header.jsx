import { AppBar, Link, Toolbar } from '@material-ui/core';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {




    render() {

        return (
            <AppBar>
                <Toolbar>
                    <h3>Formation React</h3>
                    <NavLink to="/" className="link">Accueil</NavLink>
                    <NavLink to="/cars/list" className="link">Voitures</NavLink>
                    <NavLink to="/cars/add" className="link">Ajouter</NavLink>
                    <NavLink to="/auth/login" className="link">Connexion</NavLink>
                    <NavLink to="/test" className="link">Test</NavLink>
                </Toolbar>
            </AppBar>
        )
    }
}
