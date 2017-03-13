import {Component, DoCheck} from '@angular/core';


import {Table} from './table';
import {TableService} from './app.service';

@Component({
    selector: 'table-sortable',
    templateUrl: 'tableSortable.html',
    styleUrls: ['./app.component.css'],
})

export class TableSortable implements DoCheck {
    public data_row: Table[];
    public dataTableHead: any;
    public dataTableBody: any;

    public sorting: any = {
        column: 0,
        descending: false
    };
    public searchString: string;

    constructor(private  tableService: TableService) {
        this.data_row = [];
    }

    ngDoCheck() {
        this.useData();
    }

    getData(value: string) {
        this.tableService.getData(value).then(data_row => this.data_row = data_row);
    }

    useData() {
        this.dataTableHead = this.data_row[0];
        this.dataTableBody = this.data_row.slice(1);
    }


    changeSorting(columnName: any): void {
        const column_index = Object.keys(this.dataTableHead).indexOf(columnName);
        if (this.sorting.column == column_index) {
            this.sorting.descending = !this.sorting.descending;
        } else {
            this.sorting.column = column_index;
            this.sorting.descending = false;
        }
    }

    convertSorting(): string {
        return this.sorting.descending ? '-' + this.sorting.column : '' + this.sorting.column;
    }
}
