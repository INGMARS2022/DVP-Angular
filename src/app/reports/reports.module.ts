import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { UiModule } from "../ui/ui.module";
import { LayoutComponent } from './layout/layout.component';
import { DefaulterdetailComponent } from './defaulterdetail/defaulterdetail.component';
import { LayoutdetailComponent } from './layoutdetail/layoutdetail.component';
import { PayComponent } from './pay/pay.component';
import { PaydetailComponent } from './paydetail/paydetail.component';
import { RevenueComponent } from './revenue/revenue.component';
import { RevenuedetailComponent } from './revenuedetail/revenuedetail.component';



@NgModule({
  declarations: [
    DefaultersComponent,
    LayoutComponent,
    DefaulterdetailComponent,
    LayoutdetailComponent,
    PayComponent,
    PaydetailComponent,
    RevenueComponent,
    RevenuedetailComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    UiModule
]
})
export class ReportsModule { }
