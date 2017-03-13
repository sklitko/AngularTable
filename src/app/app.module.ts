import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TableService} from './app.service';
import {HttpModule} from '@angular/http';
import {KeysPipe} from './app.pipe';
import {OrderBy} from './app.sortpipe';
import {FilterPipe} from './app.filterpipe'
import {Ng2PaginationModule} from 'ng2-pagination';
import {TableSortable} from './app.tableSortable';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './data.service';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        HttpModule,
        Ng2PaginationModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService,{
            passThruUnknownUrl: true
        })
    ],
    declarations: [
        AppComponent, KeysPipe, OrderBy, FilterPipe,TableSortable
    ],
    providers: [TableService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
