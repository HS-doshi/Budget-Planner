import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  isSlideOut = true;

  constructor(private authService: AuthService, private router: Router) {}
  toggleSideout(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }
  onPrev() {
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/budget-planner/login']);
  }
}
