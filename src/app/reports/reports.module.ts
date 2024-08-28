import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { UiModule } from "../ui/ui.module";
import { LayoutComponent } from './layout/layout.component';
import { DefaulterdetailComponent } from './defaulterdetail/defaulterdetail.component';



@NgModule({
  declarations: [
    DefaultersComponent,
    LayoutComponent,
    DefaulterdetailComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    UiModule
]
})
export class ReportsModule { }
