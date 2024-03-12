import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm  :any;
  registerForm : any;
  activeForm : 'login'| 'refister' ='login'

  constructor(private fb : FormBuilder){}

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
}
