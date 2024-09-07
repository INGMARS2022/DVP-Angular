import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { MainComponent } from './main/main.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    UiModule
  ]
})
export class LogsModule { }
