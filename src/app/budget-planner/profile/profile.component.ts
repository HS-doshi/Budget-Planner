import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , SideNavComponent , MatSnackBarModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userProfile : any;
  constructor(private fb : FormBuilder, private snackbar : MatSnackBar){}

  ngOnInit(): void {
    this.userProfile = this.fb.group({
      name : ['',Validators.required],
      age: ['',[Validators.required,Validators.min(15)]],
      dob : ['',[Validators.required ]],
      gender : ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      occupation : ['',Validators.required],
      contact : ['',[Validators.required ]],
      address  :['', Validators.required]
    })
  }

  onSave(){
    if(this.userProfile.valid){
      console.log('User Profile : ' , this.userProfile.value)
      alert('Successfully Submitted!');
    }
    else
    {
      this.snackbar.open('Please fill all the details correctly!', 'Close' , {duration :4000})
    }
  }
}
