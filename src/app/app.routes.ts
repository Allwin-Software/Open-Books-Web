import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./expenses/expenses.component').then((m) => m.ExpensesComponent),
  },
  {
    path: 'cost-center',
    loadComponent: () => import('./cost-center/cost-center.component').then((m) => m.CostCenterComponent),
  },
];
