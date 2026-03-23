import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/NavbarComponent/navbar.component'; // ✅ IMPORT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}