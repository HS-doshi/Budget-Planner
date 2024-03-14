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
    if(form === 'login'){
      this.activeForm = form;
    }
    else{
      this.activeForm = form;
    }
  }
  login():any{
    if(this.loginForm.valid){
      this.router.navigate(['/budget-planner/dashboard']),
      console.log('Login : ',this.loginForm.value)
    }
    else{
      this.snackbar.open('Invalid email or password', 'Close' , {duration:3000})
    }
    // snackbar is pop up msg -  which is enable for 3s.
  }
  register():any{
    if(this.registerForm.valid){
      console.log('Register : ',this.registerForm.value)
      this.router.navigate(['/budget-planner/login'])
    }
    else{
      this.snackbar.open('Please fill all fields correctly!' , 'Close',{duration:2000});
    }
  }
}
