import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { IndexComponent } from './index/index.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiModule,ReactiveFormsModule
  ]
})
export class UsersModule { }
