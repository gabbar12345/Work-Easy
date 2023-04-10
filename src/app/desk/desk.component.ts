import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeskService } from '../services/desk.service';
import { Floor } from '../services/Floor';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManagedesklistComponent } from '../components/manage-desk/managedesklist/managedesklist.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {
  // say:any;


  constructor(private userService:UserService,private  loginService:LoginService,private deskService:DeskService,private snack: MatSnackBar,private route:Router,private login:LoginService) { }
  user:any;
  setState:number=0;
  public desk:any;
  alldesk:any;
  showDesk:boolean=false;

  // roles:any
  // public floor[]=[]

  floor: Floor[] = [];
  public bookdesk={
    
      bookingId: 9,
      startTime: "",
      endTime: "",
      desks: {
        deskName: "",
        floor: {
          floorId: 9,
          floorNo: ""
        },
        buffer: true,
        deskId: 1
      },
      employees: {
        userName: "string",
        password: "string",
        firstName: "string",
        lastName: "string",
        profilePic: "",
        designation: "",
        managerId: 1,
        dateOfJoining: "",
        roles: [
          {
            id: 0,
            name: ""
          }
        ],
        employeeId: 0
      },
      date: "",
      canceled: false
    }
  
  
  ngOnInit(): void {
    // this.userService.role().subscribe((data:any)=>{
    //   this.bookdesk.roles=data;
    // })
  
     // this.say=DeskComponent;
    
    this.user=this.loginService.getUser();
    this.loginService.getCurrentUser();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.bookdesk.employees=data.principal.employee;
      console.log(data.principal.employee)

     
    })
    this.getAllDesks();
    this.getAllAvailableDesk();
    
   // console.log(data)
  }
  public getAllAvailableDesk(): void {
    this.userService.getallfloor().subscribe(
      (response: any) => {
        this.floor = response;
        console.log(this.floor);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
       this.snack.open(' No desk avaiable', '', {
        duration: 3000,
      });
        
      }
    );
  }
  public getdesk(value:any):void{
    this.showDesk=true;
    console.log(this.bookdesk.desks.floor.floorNo,this.bookdesk.date,this.bookdesk.startTime,this.bookdesk.endTime);
     this.userService.getavailabledesk(this.bookdesk.desks.floor.floorNo,this.bookdesk.date,this.bookdesk.startTime,this.bookdesk.endTime).subscribe(
      //yeah wala hm hata k hm all room wala lagaye the q ki mere me kaam ni kar ra tha tum change kar lena
      //this.userService.getroom().subscribe(
      (response: any) => {
        this.desk = response;
        console.log(this.desk);
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
    // this.showDesk=true;
  }

  public getAllDesks(): void {
    this.deskService.getAllDesks().subscribe(
      (response: any) => {
        this.alldesk = response;
        console.log(this.alldesk);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        this.snack.open(' No desk avaiable', '', {
          duration: 3000,
        });
      }
    );
  }



  add(){
   // console.log(this.bookdesk);
    this.loginService.getCurrentUser();
    this.setState=0;
    this.userService.bookDesk(this.bookdesk).subscribe(
      (data)=>{
        console.log(data);
        //alert('success');
      Swal.fire('Success','Your desk is booked','success');
      window.location.reload();


        
      },
      // (error)=>{
        // console.log(error);
        //console.log(this.bookdesk);
        //alert('something went wrong');
        // this.snack.open(' Try again', '', {
        //   duration: 3000,
        // });
     // }
     (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned a custom error.
        // Handle the error based on the error code and message.
        switch (error.status) {
          case 400:
           // console.error('Item not found');
           this.snack.open('you are working remote on that date.only employee who work from office can book the desk', '', {
            duration: 5000,
          });
            break;
          case 401:
            this.snack.open('Already Booked for this date', '', {
              duration: 5000,
            });
            break;

          case 500:
            this.snack.open('Server Error', '', {
              duration: 5000,
            });
            break;
          default:
            console.error(error.error.message);
            break;
        }
      }
     }
    )
    //get booked details by user/id
    // this.userService.getAllDeskBooked(this.bookdesk.employees.employeeId,this.bookdesk.date).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     alert('booked details');
        
    //   },
    //   (error)=>{
    //     console.log(error);
    //    // console.log(this.bookdesk);
    //     alert('something went wrong');
    //   }
    // )
    // console.log(this.bookdesk.date,this.bookdesk.employees.employeeId)
  }

  viewBooking()
  {
    //this.say=ManagedesklistComponent;
   // this.route.navigate(['user-dashboard/cafeteria'])

   this.login.getCurrentUser().subscribe((user: any) => {
    //this.login.setUser(user);
       if (this.login.getUserRole() == 'ROLE_ADMIN') {
         this.route.navigate(['admin/deskdetails']);
       }
   else if (this.login.getUserRole() == 'ROLE_EMPLOYEE') {
     this.route.navigate(['user-dashboard/deskdetails']);
   }
   else if (this.login.getUserRole() == 'ROLE_MANAGER') {
     this.route.navigate(['manager-dashboard/deskdetails']);

   }
   else if (this.login.getUserRole() == 'ROLE_CAFE_ADMIN') {
    this.route.navigate(['cafe-dashboard/deskdetails']);

  }  

   });



  }

  setNewVal(e:any)
  {
    
    this.bookdesk.desks.deskName=e.deskName;
    this.bookdesk.desks.deskId=e.deskId;
    this.setState=e.deskId;

    console.log(e.deskName);
    console.log(e.deskId);


  }

}
