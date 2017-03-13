import {Component} from '@angular/core';
import '../assets/css/styles.css';


@Component({
    selector: 'my-app',
    templateUrl: './app.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title: string = 'Teamer';
    tables = [0];



    addTable() {
        this.tables.push(1);
    };

}



