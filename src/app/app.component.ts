import { Component, computed, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SIDE_NAV_ITEMS } from './constants/side-nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'open-books-web';
  isSidenavOpen = signal(false);
  sideNavItems = computed(() => SIDE_NAV_ITEMS);

  toggleSidenav() {
    this.isSidenavOpen.update((prev) => !prev);
  }
}
