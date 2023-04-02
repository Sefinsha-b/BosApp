import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyForLoanService } from '../../Services/apply-for-loan.service';
import { FormControl, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApplyForLoanModule { 
  constructor(private loanForm:ApplyForLoanService){

  }
}
