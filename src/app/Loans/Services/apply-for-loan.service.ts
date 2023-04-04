import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplyForLoanService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000";

  PostLoanData(data: any) {
    return this.http.post(this.url + "/LoanAppointment", data);
  }
  GetLoan() {
    return this.http.get(this.url + "/LoanAppointment");
  }
  //put method 
  getLoanData(id: any) {
    return this.http.get(`${this.url + "/LoanAppointment/"}/${id}`);
  }
  putLoanData(id: any, data: any) {
    return this.http.put(`${this.url + "/LoanAppointment/"}/${id}`, data);
  }

}



