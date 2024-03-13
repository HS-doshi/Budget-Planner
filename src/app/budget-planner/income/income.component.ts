import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , MatOptionModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {

  incomeForm :any;
  selectedMonth : any;

  JanuaryIncome : any[] =[
    {source: 'Salary', amount : 7000, investment : '10000'},
    {source: 'Stock', amount : 3000, investment : '15000'}
  ];
  FebruaryIncome : any[] =[
    {source: 'Salary', amount : 6900, investment : '3000'},
    {source: 'Stock', amount : 3000, investment : '14000'}
  ];
  MarchIncome : any[] =[
    {source: 'Salary', amount : 7000, investment : '10000'},
    {source: 'Stock', amount : 3000, investment : '15000'},
    {source: 'IPO', amount : 5000, investment : '15000'},
  ];
  constructor(private fb : FormBuilder){
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default',{month : 'long'})
  }
  ngOnInit ():void{
    this.incomeForm = this.fb.group({
      month : ['',Validators.required],
      source : ['',Validators.required],
      amount : ['', Validators.required],
      investments : ['', Validators.required]
    })
  }
  onSubmit(){

  }
  calculatetotalMonth(month:string):number{
    let totalAmount=0 ;
    for(const income of this.getIncomeForMonth(month)){
      totalAmount+=income.amount;
    }
    return totalAmount;
  }
  getIncomeForMonth(month: string):any[]{
    switch(month){
      case 'January':
        return this.JanuaryIncome;
      case 'February':
        return this.FebruaryIncome;
      case 'March':
        return this.MarchIncome;
      default:
        return [];
    }
  }
  onChange(event:any){
    this.selectedMonth = event.target.value;
    this.getFilteredIncome();
  }
  getFilteredIncome(){
    let filteredIncomes : any [] =[];
    switch(this.selectedMonth){
      case 'January':
        filteredIncomes = [...this.JanuaryIncome];
        break;
      case 'February' :
        filteredIncomes = [...this.FebruaryIncome];
        break;
      case 'March' :
        filteredIncomes = [...this.MarchIncome];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }
}
