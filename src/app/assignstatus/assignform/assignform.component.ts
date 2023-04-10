import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/employee';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-assignform',
  templateUrl: './assignform.component.html',
  styleUrls: ['./assignform.component.scss']
})
export class AssignformComponent implements OnInit {

  public employees: Employee[] = [];

  public meeti={
        
    meetingId: 90,
    title: '',
    date: '',
    startTime:'',
    endTime: '',
    meetLink:'',
    attendees: [],
    room:[]
}

  public meet={
    
      scheduleId: 0,
      employees: [],
      date: "",
      statusForDates: ""
    
  }
  //public employees: Employee[] = [];
  user:any;
  rooms:any;
  constructor(private userService:UserService,
    private loginService:LoginService,private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  
    console.log(this.user.principal.employee.employeeId);
    this.getmember();
    
    console.log(this.user);
  }
  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public getroom(value:any):void{
  //   console.log(this.meet.date,this.meet.startTime,this.meet.endTime);
  //   // this.userService.getavailablerooms(this.meet.date,this.meet.startTime,this.meet.endTime).subscribe(
  //     this.userService.getroom().subscribe(
  //     (response: any) => {
  //       this.rooms = response;
  //       console.log(this.rooms);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
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
  meeting(){
    console.log(this.meet);
    this.userService.assignStatus(this.meet).subscribe(
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','Assigned succesfully','success');

      },
      (error)=>{
        console.log(error);
        //alert('something went wrong');
        this.snack.open(' Something went wrong', '', {
          duration: 3000,
        });
      }
    )
  }


}
