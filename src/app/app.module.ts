import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyForLoanComponent } from './Loans/apply-for-loan/apply-for-loan/apply-for-loan.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditForLoanComponent } from './Loans/apply-for-loan/apply-for-loan/edit-for-loan/edit-for-loan.component';
import { ViewLoanComponent } from './Loans/apply-for-loan/apply-for-loan/view-loan/view-loan.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ApplyForLoanComponent,
    EditForLoanComponent,
    ViewLoanComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink, 

  ],
  providers: [],
  exports: [EditForLoanComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
