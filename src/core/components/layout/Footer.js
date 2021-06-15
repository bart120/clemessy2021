import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {

    state = {
        brands: [],
        year: new Date().getFullYear()
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
                &copy; {this.state.year} formation ReactJS
                <div>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center">
                        {this.state.brands.map((brand, number) =>
                            <Grid item key={number}>
                                <Card className="root">
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
                            </Grid>
                        )}
                    </Grid>
                </div>
            </footer>
        )
    }
}



