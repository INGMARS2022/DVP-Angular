import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { LayoutComponent } from './layout/layout.component';
import { DefaulterdetailComponent } from './defaulterdetail/defaulterdetail.component';
import { LayoutdetailComponent } from './layoutdetail/layoutdetail.component';
import { PayComponent } from './pay/pay.component';
import { PaydetailComponent } from './paydetail/paydetail.component';
import { RevenueComponent } from './revenue/revenue.component';
import { RevenuedetailComponent } from './revenuedetail/revenuedetail.component';

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
        path:'pay',
        component:PayComponent,
      },
      {
        path:'pay/:id',
        component:PaydetailComponent,
      },
      {
        path:'revenue',
        component:RevenueComponent,
      },
      {
        path:'revenue/:id',
        component:RevenuedetailComponent,
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
