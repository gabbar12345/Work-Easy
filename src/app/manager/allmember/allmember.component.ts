import { LoginService } from './../../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allmember',
  templateUrl: './allmember.component.html',
  styleUrls: ['./allmember.component.scss']
})
export class AllmemberComponent implements OnInit {
  public employees: Employee[] = [];
  user:any;
  status:any;
  to=new Date().toISOString().substring(0,10);
  constructor(private userService:UserService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
    console.log(this.user.principal.employee.managerId);
    this.getmember();
    this.stat();
  }
  stat(){
    this.userService.status(this.user.principal.employee.employeeId,this.to).subscribe(
      (response) => {
        this.status = response;
        console.log(this.status);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getmember(): void {
    this.userService.getmember(this.user.principal.employee.employeeId).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
