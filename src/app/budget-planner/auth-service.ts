import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private role: string | null = null;

  login(role: string) {
    this.isLoggedIn = true;
    this.role = role;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);
  }

  logout() {
    this.isLoggedIn = false;
    this.role = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
