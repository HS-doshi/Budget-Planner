import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed typo (styleUrl -> styleUrls)
})
export class LoginComponent implements OnInit {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login(): any {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      const encryptedPassword = CryptoJS.SHA256(password).toString();

      localStorage.setItem('password', encryptedPassword);

      const role = email === 'admin@example.com' ? 'admin' : 'user';
      this.authService.login(role);

      // Navigate based on role
      if (role === 'admin') {
        this.router.navigate(['/budget-planner/admin-dashboard']);
      } else {
        this.router.navigate(['/budget-planner/dashboard']);
      }

      this.snackbar.open('Login successful!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar'],
      });
    } else {
      this.snackbar.open('Invalid email or password', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
    }
  }

  register(): any {
    if (this.registerForm.valid) {
      this.snackbar.open('Registration successful! Please login.', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar'],
      });
      this.toggleForm('login');
    } else {
      this.snackbar.open('Please fill all fields correctly!', 'Close', {
        duration: 2000,
        panelClass: ['error-snackbar'],
      });
    }
  }
}
