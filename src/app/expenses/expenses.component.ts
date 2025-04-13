import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CostCenterService } from '../cost-center/cost-center.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  // imports removed as it is not valid in @Component
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  costCenterService = inject(CostCenterService);

  expenseForm = new FormGroup({
    expenseFor: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    costCenter: new FormControl(''),
  });

  costCenters = computed(() => this.costCenterService.costCenters());
}
