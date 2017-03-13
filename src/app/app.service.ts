import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Table} from './table';

@Injectable()
export class TableService {
    data_row: Table[] = [];


    constructor(private http: Http) {
    }

    getData(key: any): Promise<Table[]> {

        return this.http.get('api/' + key)
            .toPromise()
            .then(res => res.json().data)
            .then(data_row => this.data_row = data_row)
            .catch(this.handleError);

    }

    private handleError(error: any) {
        console.log('Произошла ошибка ', error);
        return Promise.reject(error.message || error);
    }
}