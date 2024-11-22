import { NgModule } from '@angular/core';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [BudgetPlannerRoutingModule, ReactiveFormsModule, MatSnackBarModule],
})
export class BudgetPlannerModule {}
