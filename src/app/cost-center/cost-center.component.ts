import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SubHeaderComponent } from '../components/sub-header/sub-header.component';
import { CostCenterService } from './cost-center.service';
import { CostCenterForm, CostCenterSchema } from '../types/cost-centers';

@Component({
  selector: 'app-cost-center',
  imports: [
    SubHeaderComponent,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './cost-center.component.html',
  styleUrl: './cost-center.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCenterComponent {
  costCenterService = inject(CostCenterService);

  costCenterForm = new FormGroup<CostCenterForm>({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(null),
  });

  costCenters = computed(() => this.costCenterService.costCenters());

  saveCostCenter() {
    if (this.costCenterForm.valid) {
      const costCenter = this.costCenterForm.value;
      const parseResult = CostCenterSchema.safeParse(costCenter);
      if (!parseResult.success) {
        console.error('Validation failed:', parseResult.error.format());
        return;
      } else {
        this.costCenterService.saveCostCenter(parseResult.data).subscribe((response) => {
          if (response) {
            console.log('Cost center saved successfully');
            this.costCenterForm.reset();
          } else {
            console.error('Error saving cost center');
          }
        });
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
