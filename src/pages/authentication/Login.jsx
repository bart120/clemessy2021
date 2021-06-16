import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import InputMail from '../../core/components/forms/InputMail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../core/redux/authenticationActions';

class Login extends Component {

    state = {
        displayMessage: '',
        login: '',
        password: ''
    }

    /*constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    submit(ev) {
        ev.preventDefault();
        console.log("this: ", this);
        this.setState({ displayMessage: 'OK' });
    }*/

    submit = (ev) => {
        ev.preventDefault();
        //console.log("this: ", this);
        this.setState({ displayMessage: 'OK' });
        const user = { login: this.state.login, password: this.state.password, name: 'Bob' };

        //console.log("user: ", user);

        this.props.login(user);
    }

    /*submit2(ev) {
        ev.preventDefault();
        console.log("this: ", this);
        this.setState({ displayMessage: 'OK' });
    }*/

    changeFormField = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render() {
        console.log('props login', this.props);
        return (
            <div>
                <h1>Login</h1>
                {/*<form onSubmit={(ev) => this.submit2(ev)}> */}
                <form noValidate onSubmit={this.submit}>
                    <div>
                        <InputMail label="Email" validate value={this.state.login} name="login" onChange={this.changeFormField} />
                    </div>
                    <div>
                        <TextField label="Mot de passe" type="password" name="password" value={this.state.password} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" color="primary">Se connecter</Button>
                    </div>
                </form>
                {this.state.displayMessage !== '' && <Alert severity="warning">{this.state.displayMessage}</Alert>}
            </div>
        );
    }
}

const mapDispatchToProps = (payload) => {
    return { login: bindActionCreators(login, payload) }
}

export default connect(null, mapDispatchToProps)(Login)
