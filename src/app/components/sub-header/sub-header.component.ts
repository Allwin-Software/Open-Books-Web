import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  imports: [CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubHeaderComponent {
  bottomMargin = input(true);
}
