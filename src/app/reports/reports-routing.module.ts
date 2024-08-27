import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersComponent } from './defaulters/defaulters.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'defaulters',
        component:DefaultersComponent,
      },
      {
        path:'layout',
        component:LayoutComponent,
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
