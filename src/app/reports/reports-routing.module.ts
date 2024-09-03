import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { LayoutComponent } from './layout/layout.component';
import { DefaulterdetailComponent } from './defaulterdetail/defaulterdetail.component';
import { LayoutdetailComponent } from './layoutdetail/layoutdetail.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'defaulters',
        component:DefaultersComponent,
      },
      {
        path:'defaulters/:id',
        component:DefaulterdetailComponent,
      },
      {
        path:'layout',
        component:LayoutComponent,
      },
      {
        path:'layout/:id',
        component:LayoutdetailComponent,
      },
      {
        path:'**',
        redirectTo:'defaulters',
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
