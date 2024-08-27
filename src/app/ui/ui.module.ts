import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NavdataComponent } from './navdata/navdata.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavdataComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports:[
    LoadingComponent,
    NavdataComponent,
    NavComponent,
  ],
})
export class UiModule { }
