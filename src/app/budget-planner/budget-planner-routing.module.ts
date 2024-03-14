import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  // {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'side-nav' , component:SideNavComponent},
  { path: 'dashboard' , component : DashboardComponent},
  { path: 'income', component :IncomeComponent},
  { path: 'expense' , component : ExpenseComponent},
  { path: 'todo' , component:ToDoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
