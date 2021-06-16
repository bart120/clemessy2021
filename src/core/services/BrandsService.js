//import axios from 'axios';
import BaseService from "./BaseService";

const url = 'https://formation.inow.fr/demo/api/v1/brands';

export class BrandsService extends BaseService {

    getBrands() {
        return this.get(url);
    }
}