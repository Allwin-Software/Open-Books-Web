import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./expenses/expenses.component').then((m) => m.ExpensesComponent),
  },
  {
    path: 'cost-center',
    loadComponent: () => import('./cost-center/cost-center.component').then((m) => m.CostCenterComponent),
  },
];
