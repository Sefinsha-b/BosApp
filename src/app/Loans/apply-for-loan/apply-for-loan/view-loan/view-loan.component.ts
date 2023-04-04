import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplyForLoanService } from 'src/app/Loans/Services/apply-for-loan.service';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {

  // appointments: any;
  Loan: any;

  constructor(private LoanForDelete: ApplyForLoanService) { }

  ngOnInit(): void {
    this.fetchLoan();
  }
  fetchLoan() {
    return this.LoanForDelete.GetLoan().subscribe((resp: any) => {
      this.Loan = resp;

    })
  }

}
