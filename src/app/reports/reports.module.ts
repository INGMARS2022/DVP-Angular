import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { UiModule } from "../ui/ui.module";



@NgModule({
  declarations: [
    DefaultersComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    UiModule
]
})
export class ReportsModule { }
