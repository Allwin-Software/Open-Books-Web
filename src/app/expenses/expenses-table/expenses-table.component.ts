import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses-table',
  imports: [MatListModule, DatePipe, MatChipsModule],
  templateUrl: './expenses-table.component.html',
  styleUrl: './expenses-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesTableComponent {
  expensesService = inject(ExpensesService);

  expenses = computed(() => this.expensesService.expensesWithCostCenters());
}
