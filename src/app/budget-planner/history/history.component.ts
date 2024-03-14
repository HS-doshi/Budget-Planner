import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  historyForm :any;
  selectedMonth : string;

    constructor(private fb : FormBuilder,
      private router :Router){
      const currentDate = new Date();
      this.selectedMonth = currentDate.toLocaleString('default',{month : 'long'})
    }
    todo :{month:string , todoAmount :number}[]=[
      {month:'January', todoAmount : 2200},
      {month:'February', todoAmount : 2300},
      {month:'March', todoAmount : 1800}
    ]

    monthSelected : boolean = false;
    JanuaryExpense : any[] =[
      {transationType: 'Recharge', todoAmount : 11000},
      {transationType: 'Light Bills', todoAmount : 300}
    ];
    FebruaryExpense : any[] =[
      {transationType: 'Recharge', todoAmount : 11000},
      {transationType: 'Ice-Cream', todoAmount : 250}
    ];
    MarchExpense : any[] =[
      {transationType: 'Juice', todoAmount : 11000},
      {transationType: 'Ice-Cream', todoAmount : 200},
    ];

    ngOnInit ():void{
      this.historyForm = this.fb.group({
        month :['',Validators.required],
        transationType : ['',Validators.required],
        todoAmount : ['', Validators.required],
      })
    }

    calculatetotalTodo(month:string):number{
     return this.getFilteredTodo().reduce((acc,curr)=>acc+curr.todoAmount,0)
    }
    getExpenseForMonth(month: string):any[]{
      switch(month){
        case 'January':
          return this.JanuaryExpense;
        case 'February':
          return this.FebruaryExpense;
        case 'March':
          return this.MarchExpense;
        default:
          return [];
      }
    }
    onChange(event:any){
      this.selectedMonth = event.target.value;
      this.monthSelected = true;
      this.getFilteredTodo();
    }
    onChangeTodo(event:any){
      this.selectedMonth = event.target.value;
      this.monthSelected = true;
      this.getFilteredTodo();
    }
    getFilteredTodo(){
      switch(this.selectedMonth){
        case 'January':
         return this.JanuaryExpense;
        case 'February':
          return this.FebruaryExpense;
        case 'March' :
          return this.MarchExpense;
        default :
          return [];
      }
    }
    onBack(){
      this.router.navigate(["/budget-planner/dashboard"])
    }

  }
