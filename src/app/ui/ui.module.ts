import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NavdataComponent } from './navdata/navdata.component';
import { NavComponent } from './nav/nav.component';
import { DefaultersTableComponent } from './defaulters-table/defaulters-table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchdefaultersComponent } from './searchdefaulters/searchdefaulters.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavdataComponent,
    NavComponent,
    DefaultersTableComponent,
    PaginatorComponent,
    SearchdefaultersComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports:[
    LoadingComponent,
    NavdataComponent,
    NavComponent,
    DefaultersTableComponent,
    PaginatorComponent,
    SearchdefaultersComponent,
  ],
})
export class UiModule { }
