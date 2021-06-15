import { Card, CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {

    state = {
        brands: []
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }
            ]
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <footer>
                &copy; formation ReactJS
                <div>
                    {this.state.brands.map((brand, number) =>
                        <Card className="root" key={brand.name}>
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={`images/${brand.image}`}
                                    title="{brand.name}"
                                />
                                <CardContent>
                                    {brand.name}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )}

                </div>
            </footer>
        )
    }
}



