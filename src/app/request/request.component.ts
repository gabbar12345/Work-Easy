import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import {Request} from '../services/Request';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { AssignformComponent } from '../assignstatus/assignform/assignform.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public employees: Employee[] = [];
  public editEmployee: Employee | undefined;
  public deleteEmployee: Employee | undefined;
  public editRequest: Request | undefined;
  public request: Request[]=[];
  public req!:Request;
  user:any;
  //Request: any;

  constructor(private userService:UserService,private loginService:LoginService,private snack: MatSnackBar,
    private dialog:MatDialog) { }


  
  ngOnInit(): void {
    this.user=this.loginService.getUser();
    console.log(this.user.principal.employee.employeeId);
    this.getEmployees();
    //this.req=this.userService.approveRequest();
   // this.approve();
   this.pendingM()
    // this.req=this.userService.approveRequest(this.req.requestId);
   // this.approve();
   // console.log(this.req.requestId)
    

  }

  

  public approve(reques:number)
  {

    console.log("maniha");

    //this.getAllRequest()
    //console.log(this.request)
    this.userService.approveRequest(reques,this.req).subscribe(
      (response: any) => {
        this.req = response;
       // console.log(this.req.requestId);
        this.pendingM();
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    );
  }
  public reject(reques:number)
  {
    console.log("maniha");
    //this.getAllRequest()
    //console.log(this.request)
    this.userService.rejectRequest(reques,this.req).subscribe(
      (response: any) => {
        this.req = response;
       // console.log(this.req.requestId);
        this.pendingM();
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    );
  }

  
  public getAllRequest()
  {
    this.userService.getAllRequestToManager(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
        console.log(this.request);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
      }
    );
  }
  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Request[] = [];
    for (const employee of this.request) {
      if (employee.requestStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(employee);
      }
    }
    this.request= results;
    if (results.length === 0 || !key) {
      this.getAllRequest();
    }
  }
  assign(){
    this.dialog.open(AssignformComponent,{width:"50%"});
  }
  acceptedM(){
    this.userService.approvedM(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
        console.log(this.request);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
      }
    );
  }
  pendingM(){
    this.userService.pendingM(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
        console.log(this.request);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
      }
    );
  }
  rejectedM(){
    this.userService.rejectM(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
        console.log(this.request);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
      }
    );
  }
}
