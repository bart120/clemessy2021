import React, { Component } from 'react'
import { CarsService } from '../../core/services/CarsService';
import { Button } from '@material-ui/core';

export default class CarList extends Component {
    static servCar = new CarsService();

    state = { cars: [] };

    componentDidMount() {
        this.refresh();
        //this.setState
    }

    refresh = () => {
        CarList.servCar.getCars()
            .then(data => {
                this.setState({ cars: data });
            }).catch(err => alert(err.message));
    }

    render() {
        return (
            <div>
                <h1>Liste des voitures</h1>
                <Button onClick={this.refresh}>Actualiser</Button>
                <table>
                    <thead>
                        <tr><th>#ID</th><th>Nom</th><th>Price</th></tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map((car) =>
                        (<tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.model}</td>
                            <td>{car.price}</td>
                        </tr>)
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
