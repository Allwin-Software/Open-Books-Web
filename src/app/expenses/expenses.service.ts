import { computed, inject, Injectable, resource } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

import { Expense, InsertExpenseResponse } from '../types/expenses';
import { HttpService } from '../services/http.service';
import { expensesEndpoint } from '../constants/api-endpoints';
import { CostCenterService } from '../cost-center/cost-center.service';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  httpService = inject(HttpService);
  costCenterService = inject(CostCenterService);

  expensesResource = resource({
    loader: ({ request, abortSignal }) => {
      const api$ = this.httpService.get<Expense[]>(expensesEndpoint);
      return lastValueFrom(api$);
    },
  });

  expenses = computed(() => this.expensesResource.value() || []);
  costCenters = computed(() => this.costCenterService.costCenters());
  expensesWithCostCenters = computed(() => {
    const expenses = this.expenses();
    const costCenters = this.costCenters();
    return expenses.map((expense) => {
      const costCenter = costCenters.find((cc) => cc._id === expense.costCenterId);
      return {
        ...expense,
        costCenterName: costCenter ? costCenter.name : 'Unknown',
      };
    });
  });

  saveExpenses(expense: Expense) {
    return this.httpService
      .post<InsertExpenseResponse>(expensesEndpoint, expense)
      .pipe(map((response) => response.success === true));
  }
}
