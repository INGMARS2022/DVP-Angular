import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './security/token.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => (m.AuthModule)),
  },
  {
    path:'reports',
    canActivate:[TokenGuard],
    loadChildren: () => import('./reports/reports.module').then( m => (m.ReportsModule)),
  },
  {
    path:'logs',
    canActivate:[TokenGuard],
    loadChildren: () => import('./logs/logs.module').then( m => (m.LogsModule)),
  },
  {
    path:'users',
    canActivate:[TokenGuard],
    loadChildren: () => import('./users/users.module').then( m => (m.UsersModule)),
  },
  {
    path:'**',
    redirectTo:'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
