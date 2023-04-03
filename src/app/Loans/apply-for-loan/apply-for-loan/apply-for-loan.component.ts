import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApplyForLoanService } from '../../Services/apply-for-loan.service';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent implements OnInit {
  

  //to create object
  addForm = new FormGroup({
    name: new FormControl(""),
    number: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl(""),
    nationality: new FormControl(""),
    dob: new FormControl(""),
    age: new FormControl(""),
    aadhar: new FormControl(""),
    loan: new FormControl(""),
    address: new FormControl(""),
    //SHow 1
    propertySqft: new FormControl(""),
    builderName: new FormControl(""),
    propertyValue: new FormControl(""),
    annualSalary1: new FormControl(""),
    loanAmount1: new FormControl(""),
    loanDuration1: new FormControl(""),
    //Show 2
    companyname: new FormControl(""),
    experience: new FormControl(""),
    annualSalary2: new FormControl(""),
    emiamount: new FormControl(""),
    loanAmount2: new FormControl(""),
    loanDuration2: new FormControl("")




  })
  LoanAppointments: any;
  constructor(private loan: ApplyForLoanService) { }
  ngOnInit(): void {
    // this.submit();
    this.inputfields();
    
  }
  get add() {
    return this.addForm.controls;
  }

  showFields1: boolean = false;
  showFields2: boolean = false;

  inputfields() {
    if (this.addForm.controls.loan.value == "Home Loan") {
      this.showFields1 = true;
    }
    else {
      this.showFields1 = false;
    }
    if (this.addForm.controls.loan.value == "Personal Loan") {
      this.showFields2 = true;
    }
    else {
      this.showFields2 = false;
    }

  }

  submit() {
    return this.loan.PostLoanData(this.addForm.value).subscribe((resp: any) => {
      // this.LoanAppointments = resp;
      console.log(resp);
      alert('SUCCESS POST')
    })
  }


}
