import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';

@Component({
  selector: 'app-cost-center',
  imports: [SubHeaderComponent],
  templateUrl: './cost-center.component.html',
  styleUrl: './cost-center.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCenterComponent {}
