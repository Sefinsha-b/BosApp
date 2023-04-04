import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplyForLoanService } from 'src/app/Loans/Services/apply-for-loan.service';

@Component({
  selector: 'app-edit-for-loan',
  templateUrl: './edit-for-loan.component.html',
  styleUrls: ['./edit-for-loan.component.css']
})
export class EditForLoanComponent implements OnInit {

  editForm = new FormGroup({
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
  Loans: any;
  // router: any;


  constructor(private loan: ApplyForLoanService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    // this.submit();
    this.inputfields();
    this.GetLoanData();
    this.updateAppointmentData();
    // this.update();

  }
  get add() {
    return this.editForm.controls;
  }

  showFields1: boolean = false;
  showFields2: boolean = false;

  inputfields() {
    if (this.editForm.controls.loan.value == "Home Loan") {
      this.showFields1 = true;
    }
    else {
      this.showFields1 = false;
    }
    if (this.editForm.controls.loan.value == "Personal Loan") {
      this.showFields2 = true;
    }
    else {
      this.showFields2 = false;
    }

  }
  //Post method
  submit() {
    return this.loan.PostLoanData(this.editForm.value).subscribe((resp: any) => {
      this.LoanAppointments = resp;
      console.log(resp);
      alert('SUCCESS POST')
    })
  }
  //Get ,ethod
  GetLoanData() {
    return this.loan.GetLoan().subscribe((resp: any) => {
      this.Loans = resp;


    })
  }
  //edit method function

  updateAppointmentData() {

    this.loan.getLoanData(this.router.snapshot.params['id']).subscribe((resp: any) => {
      this.editForm = new FormGroup({
        name: new FormControl(resp['name']),
        number: new FormControl(resp['name']),
        email: new FormControl(resp['email']),
        gender: new FormControl(resp['gender']),
        nationality: new FormControl(resp['nationality']),
        dob: new FormControl(resp['dob']),
        age: new FormControl(resp['age']),
        aadhar: new FormControl(resp['aadhar']),
        loan: new FormControl(resp['loan']),
        address: new FormControl(resp['address']),
        //SHow 1
        propertySqft: new FormControl(resp['propertySqft']),
        builderName: new FormControl(resp['builderName']),
        propertyValue: new FormControl(resp['propertyValue']),
        annualSalary1: new FormControl(resp['annualSalary1']),
        loanAmount1: new FormControl(resp['loanAmount1']),
        loanDuration1: new FormControl(resp['loanDuration1']),
        //Show 2
        companyname: new FormControl(resp['companyname']),
        experience: new FormControl(resp['experience']),
        annualSalary2: new FormControl(resp['annualSalary2']),
        emiamount: new FormControl(resp['emiamount']),
        loanAmount2: new FormControl(resp['loanAmount2']),
        loanDuration2: new FormControl(resp['loanDuration2'])




      })
    });

  }
  update() {
    return this.loan.putLoanData(this.router.snapshot.params['id'],
      this.editForm.value).subscribe((resp: any) => {
        console.log(resp);
        alert("Update Successfully...!");
        // window.location.reload();
      });
  }




}
