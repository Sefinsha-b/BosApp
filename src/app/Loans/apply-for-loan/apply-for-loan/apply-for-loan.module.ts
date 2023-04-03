import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyForLoanService } from '../../Services/apply-for-loan.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ,HttpClientModule,FormsModule
  ]
})
export class ApplyForLoanModule { 
}
