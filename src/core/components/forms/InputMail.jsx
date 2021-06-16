import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class InputMail extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.bool,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        label: "test"
    }

    state = {
        errorMail: false
    }

    changeInput = (ev) => {
        const value = ev.target.value;
        if (this.props.validate) {
            this.setState({ errorMail: !regMail.test(value) });
            //this.setState(regMail.test(value) ? { errorMail: true } : { errorMail: false });
            /*if (regMail.test(value)) {
                this.setState({ errorMail: false });
            } else {
                this.setState({ errorMail: true });
            }*/
        }
        this.props.onChange(ev);
    }

    render() {
        return (
            <TextField type="email" label={this.props.label} value={this.props.value} name={this.props.name}
                onChange={this.changeInput} error={this.state.errorMail} />
        )
    }
}
