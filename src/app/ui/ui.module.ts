import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NavdataComponent } from './navdata/navdata.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavdataComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports:[
    LoadingComponent,
    NavdataComponent
  ],
})
export class UiModule { }
