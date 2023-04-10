import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wfodays',
  templateUrl: './wfodays.component.html',
  styleUrls: ['./wfodays.component.scss']
})
export class WfodaysComponent implements OnInit {
user:any;
ans:any=[];
constructor(private _location: Location,private loginService:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
    this.nextDayInOffice(this.user.principal.employee.employeeId);

  }
  
  nextDayInOffice(employeeId:number)
  {
    this.loginService.wfoDays(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
         this.ans=response;
         console.log(this.ans);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log(error);
      })
  }
 

  goback(){
    this._location.back();
  }



}
