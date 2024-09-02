import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NavdataComponent } from './navdata/navdata.component';
import { NavComponent } from './nav/nav.component';
import { DefaultersTableComponent } from './defaulters-table/defaulters-table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchdefaultersComponent } from './searchdefaulters/searchdefaulters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RevenueTableComponent } from './revenue-table/revenue-table.component';
import { SearchrevenueComponent } from './searchrevenue/searchrevenue.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavdataComponent,
    NavComponent,
    DefaultersTableComponent,
    PaginatorComponent,
    SearchdefaultersComponent,
    RevenueTableComponent,
    SearchrevenueComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoadingComponent,
    NavdataComponent,
    NavComponent,
    DefaultersTableComponent,
    PaginatorComponent,
    SearchdefaultersComponent,
    RevenueTableComponent,
    SearchrevenueComponent
  ],
})
export class UiModule { }
