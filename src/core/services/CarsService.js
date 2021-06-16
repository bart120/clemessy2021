//import axios from 'axios';
import BaseService from './BaseService';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export class CarsService extends BaseService {

    getCars() {
        /*axios.get(url).then(resp => {
            console.info(resp.data);
        });*/
        //return axios.get(url);
        //console.log("fin getCars");
        // return [];
        return this.get(url);
    }

    saveCar(car) {
        return this.post(url, car);
    }
}