import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {SideNavComponent} from '../side-nav/side-nav.component'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule , SideNavComponent ,FormsModule , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    constructor(private router : Router){}

    lastMonthIncome = ['January: 10000','February : 15000','March: 16000'];
    currentMonthIncome = '45000'

    lastMonthExpense = ['January : 13000','February:13500' , 'March:14000']
    currentMonthExpense= '2000'

    toDoList = ['Pay Electricity Bill',
                'Submit Monthly Report',
                'Buy Groceries',
                'Call insurance company']
    totalCurrentMonthIncome = 50000;
    totalCurrentMonthExpense = 14000;

    onIncome(){
      this.router.navigate(['/budget-planner/income'])
    }
    onTodo(){
      this.router.navigate(['/budget-planner/todo'])
    }
    onExpense(){
      this.router.navigate(['/budget-planner/expense'])
    }
    onTotal(){
      this.router.navigate(['/budget-planner/total'])
    }

}
