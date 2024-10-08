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
import { LayoutTableComponent } from './layout-table/layout-table.component';
import { SearchlayoutComponent } from './searchlayout/searchlayout.component';
import { PaginatorlayoutComponent } from './paginatorlayout/paginatorlayout.component';
import { PaginatorpayComponent } from './paginatorpay/paginatorpay.component';
import { SearchpayComponent } from './searchpay/searchpay.component';
import { PayTableComponent } from './pay-table/pay-table.component';
import { SearchrevenueComponent } from './searchrevenue/searchrevenue.component';
import { RevenueTableComponent } from './revenue-table/revenue-table.component';
import { PaginatorrevenueComponent } from './paginatorrevenue/paginatorrevenue.component';
import { MessageflashComponent } from './messageflash/messageflash.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavdataComponent,
    NavComponent,
    DefaultersTableComponent,
    PaginatorComponent,
    SearchdefaultersComponent,
    LayoutTableComponent,
    SearchlayoutComponent,
    PaginatorlayoutComponent,
    PaginatorpayComponent,
    SearchpayComponent,
    PayTableComponent,
    SearchrevenueComponent,
    RevenueTableComponent,
    PaginatorrevenueComponent,
    MessageflashComponent
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
    LayoutTableComponent,
    SearchlayoutComponent,
    PaginatorlayoutComponent,
    PaginatorpayComponent,
    SearchpayComponent,
    PayTableComponent,
    SearchrevenueComponent,
    RevenueTableComponent,
    PaginatorrevenueComponent,
    MessageflashComponent
  ],
})
export class UiModule { }
