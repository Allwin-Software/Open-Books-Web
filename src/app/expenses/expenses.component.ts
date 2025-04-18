import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { CostCenterService } from '../cost-center/cost-center.service';
import { ExpensesService } from './expenses.service';
import { Expense, ExpenseForm, ExpenseSchema } from '../types/expenses';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';

@Component({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ExpensesTableComponent,
    SubHeaderComponent,
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  costCenterService = inject(CostCenterService);
  expensesService = inject(ExpensesService);

  expenseForm = new FormGroup<ExpenseForm>({
    expenseFor: new FormControl('', [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    costCenterId: new FormControl('', [Validators.required]),
  });

  costCenters = computed(() => this.costCenterService.costCenters());

  saveExpense() {
    if (this.expenseForm.valid) {
      const expense = this.expenseForm.value;
      const parseResult = ExpenseSchema.safeParse(expense);
      if (!parseResult.success) {
        console.error('Validation failed:', parseResult.error.format());
        return;
      } else {
        this.expensesService.saveExpenses(parseResult.data).subscribe((response) => {
          if (response) {
            console.log('Expense saved successfully');
          } else {
            console.error('Error saving expense');
          }
        });
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
