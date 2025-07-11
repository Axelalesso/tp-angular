import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav style="padding: 1rem; background: #eee;">
      <a routerLink="/home" routerLinkActive="active" style="margin-right: 1rem;">Inicio</a>
      <a routerLink="/products" routerLinkActive="active">Productos</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
