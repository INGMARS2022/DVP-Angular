import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersComponent } from './defaulters/defaulters.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'defaulters',
        component:DefaultersComponent,
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
