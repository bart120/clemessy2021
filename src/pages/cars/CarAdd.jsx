import React, { Component } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'

export default class CarAdd extends Component {


    state = {
        car: {},
        brands: null
    }

    submit = (ev) => {
        ev.preventDefault();
    }

    changeFormField = (ev) => {
        const car = Object.assign(this.state.car, { [ev.target.name]: ev.target.value });
        this.setState({ car: car });
    }


    render() {
        return (
            <div>
                <h1>Ajouter une voiture</h1>

                <form noValidate onSubmit={this.submit}>
                    <div>
                        <TextField label="Modèle" name="model" value={this.state.car.model || ''} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <TextField type="number" label="Prix" name="price" value={this.state.car.price || 0} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <TextField type="date" label="Mise en circulation" name="dateOfCirculation" value={this.state.car.dateOfCirculation} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel id="brandLabel">Marque</InputLabel>
                            <Select id="brand" labelId="brandLabel" name="brandID" value={this.state.car.brandID || ''}
                                onChange={this.changeFormField}>
                                {this.state.brands && this.state.brands.map((item, index) => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button variant="contained" type="submit">Enregistrer</Button>
                    </div>
                </form>
            </div>
        )
    }
}
