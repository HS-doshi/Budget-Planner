import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm  :any;
  registerForm : any;
  activeForm : 'login'| 'register' ='login'

  constructor(private fb : FormBuilder , private router : Router,private snackbar:MatSnackBar){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]
    });
    this.registerForm = this.fb.group({
      username : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]
    });
  }
  toggleForm(form:'login'|'register'){
    this.activeForm = form;
  }
  login():any{
    if(this.loginForm.valid){
      console.log('Login : ',this.loginForm.value),
      this.router.navigate(['/budget-planner'])
    }
    else{
      this.snackbar.open('Invalid email or password', 'Close' , {duration:3000})
    }
    // snackbar is pop up msg -  which is enable for 3s.
  }
  register():any{
    if(this.registerForm.valid){
      console.log('Register : ',this.registerForm.value),
      this.snackbar.open('Successfullt Registered!!')
      this.router.navigate(['/budget-planner/login'])
    }
    else{
      this.snackbar.open('Invaid email or password!' , 'close',{duration:2000});
    }
  }
}
