import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplyForLoanService {

  constructor (private http: HttpClient) { }
  url: string = "http://localhost:3000";

  PostLoanData( data:any){
    return this.http.post(this.url+"/LoanAppointment", data);
  }
 }
  

