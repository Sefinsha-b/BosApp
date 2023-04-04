import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoanComponent } from './Loans/apply-for-loan/apply-for-loan/view-loan/view-loan.component';
import { EditForLoanComponent } from './Loans/apply-for-loan/apply-for-loan/edit-for-loan/edit-for-loan.component';
import { ApplyForLoanComponent } from './Loans/apply-for-loan/apply-for-loan/apply-for-loan.component';

const routes: Routes = [
  {path: '', redirectTo:"viewForLoan",pathMatch:'full'},
  {path:"addapplication", component:ApplyForLoanComponent},
  {path:"viewapplication", component:ViewLoanComponent},
  {path:"edit/:id", component:EditForLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
