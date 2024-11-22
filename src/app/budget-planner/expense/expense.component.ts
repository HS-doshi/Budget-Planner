import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatOptionModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string;

  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }
  expenses: { month: string; expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 2200 },
    { month: 'February', expenseAmount: 2300 },
    { month: 'March', expenseAmount: 1800 },
  ];

  monthSelected: boolean = false;
  JanuaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 11000 },
    { expenseType: 'Groceries', expenseAmount: 300 },
  ];
  FebruaryExpense: any[] = [
    { expenseType: 'Utility', expenseAmount: 11000 },
    { expenseType: 'Groceries', expenseAmount: 250 },
  ];
  MarchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 11000 },
    { expenseType: 'Groceries', expenseAmount: 200 },
  ];

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required],
    });
  }
  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpense().push(newExpense);
      this.expenseForm.reset();
    }
  }
  calculatetotalExpense(month: string): number {
    return this.getFilteredExpense().reduce(
      (acc, curr) => acc + curr.expenseAmount,
      0
    );
  }
  getExpenseForMonth(month: string): any[] {
    switch (month) {
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
  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpense();
  }
  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpense();
  }
  getFilteredExpense() {
    switch (this.selectedMonth) {
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
  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onSave() {
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
      this.getFilteredExpense();
    }
  }
  saveForm() {
    alert('Form saved!');
  }
}
