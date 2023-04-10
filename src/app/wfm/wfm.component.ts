import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { WfmformComponent } from './wfmform/wfmform.component';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-wfm',
  templateUrl: './wfm.component.html',
  styleUrls: ['./wfm.component.scss']
})
export class WfmComponent implements OnInit {
  public request: any
  rdt:any;
  user:any;
  d=new Date();
  dt=new Date(this.d.setDate(this.d.getDate() - 1)).getTime(); 
  constructor(private userService:UserService,private  loginService:LoginService,private dialog:MatDialog, private snack: MatSnackBar,private route:Router) { }
  public member={
    requestId: 0,
    employee: {
      userName: "mani_123",
      password: "mani123",
      firstName: "manisha",
      lastName: "kumari",
      profilePic: "na",
      designation: "na",
      managerId: 4,
      dateOfJoining: "2022-11-10T06:37:38.120Z",
      roles: [
        {
          id: 2,
          name: "ROLE_EMPLOYEE"
        }
      ],
      employeeId: 5
    },
    date: "2022-11-10",
    statusForDay: "WFO",
    requestStatus: "PENDING"
  }
  
  ngOnInit(): void {
        this.user=this.loginService.getUser();
    console.log(this.user.principal.employee.employeeId);
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.member.employee=data.employee;
      
    })
   // this.userService.getAllRequestByEmployeeid(this.user.principal.employee.employeeId);
    //console.log(this.userService.getAllRequestByEmployeeid(this.user.principal.employee.employeeId))

    // this.userService.refreshNeeded$
    // .subscribe(()  =>
    // {
    //   this.Pending();

    // });
    this.Pending();


    //console.log(this.getAllRequest(this.user.principal.employee.employeeId))
  }
  add(){
    console.log(this.member);
    this.userService.addwfm(this.member).subscribe(
      (data)=>{
        console.log(data);
        alert('success');
      },
      (error)=>{
        console.log(error);
        //alert('something went wrong');
        console.log('Error !');
        console.log(error);
        this.snack.open('something went wrong', '', {
          duration: 3000,
        });
      }
    )
  }

  public getAllRequest(employeeId:number)
  {

      this.userService.getAllRequestByEmployeeid(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
      
        console.log(new Date(this.request[3].date).getTime(), this.dt);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('No Request Found', '', {
          duration: 3000,
        });

      }
    );
  }

  Approve()
  {
    this.userService.aprovedall(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
      
       // console.log(new Date(this.request[3].date).getTime(), this.dt);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('No Request Found', '', {
          duration: 3000,
        });

      }
    );

  }

  Pending()
  {
    this.userService.pendingall(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
      
       // console.log(new Date(this.request[3].date).getTime(), this.dt);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('No Request Found', '', {
          duration: 3000,
        });

      }
    );

  }

  Rejected()
  {
    this.userService.rejectedall(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        this.request = response;
      
       // console.log(new Date(this.request[3].date).getTime(), this.dt);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('No Request Found', '', {
          duration: 3000,
        });

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
      this.getAllRequest(this.user.principal.employee.employeeId);
    }
  }
  newMeet(){
    console.log('clicked');
    this.dialog.open(WfmformComponent,{width:"50%"});
  }
  reject(reques:number)
  {
    console.log("maniha");
    //this.getAllRequest()
    //console.log(this.request)
    this.userService.delrequest(reques).subscribe(

      (response: any) => {
        
       // console.log(this.req.requestId);
        
        console.log(response)
        
        this.getAllRequest(this.user.principal.employee.employeeId);
       // window.location.reload();
      },
      (error: HttpErrorResponse) => {
        this.getAllRequest(this.user.principal.employee.employeeId);

       // alert(error.message);
      }
    );
  }
  convert(v:any){
     return new Date(v).getTime();
  }

  wfoDays(){
    // this.route.navigate(['user-dashboard/wfoDays']);

    this.loginService.getCurrentUser().subscribe((user: any) => {
      //this.login.setUser(user);
      if (this.loginService.getUserRole() == 'ROLE_EMPLOYEE') {
       this.route.navigate(['user-dashboard/wfoDays']);
     }
     else if (this.loginService.getUserRole() == 'ROLE_MANAGER') {
       this.route.navigate(['manager-dashboard/wfoDays']);
 
     } 
     
     });
  }
  
}
