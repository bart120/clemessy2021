import { AppBar, Link, Toolbar } from '@material-ui/core';
import React, { Component } from 'react'

export default class Header extends Component {




    render() {

        return (
            <AppBar>
                <Toolbar>
                    <h3>Formation React</h3>
                    <Link href="#" className="link">Accueil</Link>
                    <Link href="#" className="link">Voitures</Link>
                    <Link href="#" className="link">Ajouter</Link>
                    <Link href="#" className="link">Connexion</Link>
                </Toolbar>
            </AppBar>
        )
    }
}
