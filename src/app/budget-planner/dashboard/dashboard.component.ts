import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {SideNavComponent} from '../side-nav/side-nav.component'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule , SideNavComponent ,FormsModule , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    lastMonthIncome = ['January: 10000','February : 15000','March: 16000'];
    currentMonthIncome = '45000'

    lastMonthExpense = ['January : 13000','February:13500' , 'March:14000']
    currentMonthExpense= '2000'

    toDoList = ['Pay Electricity Bill',
                'Submit Monthly Report',
                'Buy Groceries',
                'Call insurance company']
}
