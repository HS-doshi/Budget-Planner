import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RouterOutlet,
    FormsModule
  ]
})
export class BudgetPlannerModule {

}
