import React, { Component } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { CarsService } from '../../core/services/CarsService';
import { BrandsService } from '../../core/services/BrandsService';
import moment from 'moment';


export default class CarAdd extends Component {
    static servCar = new CarsService();
    static servBrand = new BrandsService();

    state = {
        car: {},
        brands: null
    }

    submit = (ev) => {
        ev.preventDefault();
        const car = this.state.car;
        car.price = +car.price;
        CarAdd.servCar.saveCar(car).then(data => {
            alert(`Voiture enregistrée avec l'ID ${data.id}`);
        });
    }

    changeFormField = (ev) => {

        const car = Object.assign(this.state.car, { [ev.target.name]: ev.target.value });
        console.log(car);
        this.setState({ car: car });
    }

    componentDidMount() {
        CarAdd.servBrand.getBrands().then(data => {
            this.setState({ brands: data });
        });
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
                        <TextField type="date" label="Mise en circulation" name="dateOfCirculation"
                            value={moment(this.state.car.dateOfCirculation).format('yyyy-MM-DD')} onChange={this.changeFormField} />
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
