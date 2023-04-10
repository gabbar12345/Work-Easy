import { LoginService } from './../../services/login.service';
import { Meeting } from './../../services/meeting';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss']
})
export class NewMeetingComponent implements OnInit {
  public employees: Employee[] = [];

  // setSlot:number=0;
  // showSlot:boolean=false;

  public meet={
        
    meetingId: 90,
    title: '',
    date: '',
    startTime:'',
    endTime: '',
    meetLink:'',
    attendees: [],
    room:[
      {
        roomId: 0,
        hallName: "",
        capacity: 0
      }
    ]
}
  //public employees: Employee[] = [];
  user:any;
  rooms:any;
  select=[];
  constructor(private userService:UserService,
    private loginService:LoginService,    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  
    console.log(this.user.principal.employee.employeeId);
    this.getEmployees();
    this.select=this.user.principal.employee;
    console.log(this.user);
  }
  
  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open(' Try again', '', {
          duration: 3000,
        });
      }
    );
  }

  public getroom(value:any):void{
    // this.showSlot=true;

    console.log(this.meet.date,this.meet.startTime,this.meet.endTime);
     this.userService.getavailablerooms(this.meet.date,this.meet.startTime,this.meet.endTime).subscribe(
      //yeah wala hm hata k hm all room wala lagaye the q ki mere me kaam ni kar ra tha tum change kar lena
      //this.userService.getroom().subscribe(
      (response: any) => {
        this.rooms = response;
        console.log(this.rooms);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
       console.log('Error !');
        console.log(error);
        // this.snack.open('Rooms not available !! Try again', '', {
        //   duration: 3000,
        // });
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
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('Something went wrong !! Try again', '', {
          duration: 3000,
        });


      }
    );
  }
  meeting(){
    console.log(this.meet);
    this.userService.addmeet(this.meet).subscribe(
      
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','meeting created','success');

      },
      (error)=>{
        //console.log(error);
       // alert('something went wrong');
       console.log('Error !');
        console.log(error);
        this.snack.open('Something went wrong !! Try again', '', {
          duration: 3000,
        });

      }
    )
  }

  // setNewVal(e:any)
  // {
    
  //   this.meet.room!=e.hallName;
  //   this.meet.room=e.roomId;
  //   this.setSlot=e.roomId;

  //   console.log(e.hallName);
  //    console.log(e.roomId);


  // }

  

}
