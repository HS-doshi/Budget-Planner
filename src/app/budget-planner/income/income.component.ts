import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

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

  constructor(private fb : FormBuilder,
    private router :Router){
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default',{month : 'long'})
  }

  JanuaryIncome : any[] =[
    {source: 'Salary', amount : 7000, investments : 'Salary'},
    {source: 'Stock', amount : 3000, investments : 'Stock'}
  ];
  FebruaryIncome : any[] =[
    {source: 'Salary', amount : 6900, investments : 'Salary'},
    {source: 'Stock', amount : 3000, investments : 'Stock'}
  ];
  MarchIncome : any[] =[
    {source: 'Salary', amount : 7000, investments : 'Salary'},
    {source: 'Stock', amount : 3000, investments : 'Stock'},
    {source: 'IPO', amount : 5000, investments : 'IPO'},
  ];

  monthSelected : boolean = false;
  ngOnInit ():void{
    this.incomeForm = this.fb.group({
      month : ['',Validators.required],
      source : ['',Validators.required],
      amount : ['', Validators.required],
      investments : ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.incomeForm.valid){
      const newIncome = this.incomeForm.value;
      switch(this.selectedMonth){
        case 'January':
          this.JanuaryIncome.push(newIncome);
          break;
        case 'February':
          this.FebruaryIncome.push(newIncome);
          break;
        case 'March':
          this.MarchIncome.push(newIncome);
          break;
        default:
          break;
      }
      // this.incomeForm.reset('');
      this.incomeForm.patchValue({month :'',source:'',amount:'',investments :''})
    }
  }
  calculatetotalMonth(month:string):number{
    let totalIncome=0 ;
    for(const income of this.getIncomeForMonth(month)){
      totalIncome+=income.amount;
    }
    return totalIncome;
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
    this.monthSelected = true;
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
  onBack(){
    this.router.navigate(["/budget-planner/dashboard"])
  }
  saveForm(){
    alert('Form saved!');

  }
}
