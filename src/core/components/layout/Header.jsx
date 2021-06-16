import { AppBar, Link, Toolbar } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        console.log("props", this.props);
        return (
            <AppBar>
                <Toolbar>
                    <h3>Formation React</h3>
                    <NavLink to="/" className="link">Accueil</NavLink>
                    <NavLink to="/cars/list" className="link">Voitures</NavLink>
                    <NavLink to="/cars/add" className="link">Ajouter</NavLink>
                    {this.props.isConnected ?
                        <span>Bonjour {this.props.user.name}</span> :
                        <NavLink to="/auth/login" className="link">Connexion</NavLink>
                    }


                    <NavLink to="/test" className="link">Test</NavLink>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
    return { isConnected: state.isConnected, user: state.user };
}


export default connect(mapStateToProps)(Header);
