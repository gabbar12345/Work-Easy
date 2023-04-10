import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Area } from '../services/area';
import { Floor } from '../services/Floor';
import { LoginService } from '../services/login.service';
import { ParkingService } from '../services/parking.service';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  constructor(private userService:UserService,private  loginService:LoginService,private parkingService:ParkingService,private snack: MatSnackBar,private route:Router,private login:LoginService) { }
  user:any;

  public slot:any
  setSlot:number=0;
  showSlot:boolean=false;

  allslot:any;


  // roles:any
  // public floor[]=[]

  area: Area[] = [];
  public member={
      bookingId: 1,
      startTime: "",
      endTime: "",
      slots: {
        parkingSlotName: "slot1",
        area: {
          areaId: 0,
          areaNo: ""
        },
        buffer: true,
        parkingSlotId: 128
      },
      employees: {
      userName: "string",
      password: "string",
      firstName: "string",
      lastName: "string",
      profilePic: "string",
      designation: "string",
      managerId: 0,
      dateOfJoining: "2022-11-18T14:25:15.998Z",
        roles: [
          {
            id: 0,
            name: "string"
          }
        ],
        employeeId: 0
      },
      date: "2022-11-18",
      canceled: false
    }    
  
  ngOnInit(): void {
    // this.userService.role().subscribe((data:any)=>{
    //   this.member.roles=data;
    // })
    this.user=this.loginService.getUser();
    this.loginService.getCurrentUser();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.member.employees=data.principal.employee;
      console.log(data.principal.employee)

     
    })
    this.getAllArea();
    this.getAllParkingSlots();
    
   // console.log(data)
  }

  public getAllParkingSlots(): void {
    this.parkingService.getAllParkingSlot().subscribe(
      (response: any) => {
        this.allslot = response;
        console.log(this.allslot);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
       this.snack.open(' slot not avaiable', '', {
        duration: 3000,
      });
      }
    );
  }



  public getAllArea(): void {
    this.userService.getAllParkingArea().subscribe(
      (response: any) => {
        this.area = response;
        console.log(this.area);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getslot(value:any):void{
    this.showSlot=true;

    console.log(this.member.slots.area.areaNo,this.member.date,this.member.startTime,this.member.endTime);
     this.userService.getAllAvailableParkingSlot(this.member.slots.area.areaNo,this.member.date,this.member.startTime,this.member.endTime).subscribe(
      //yeah wala hm hata k hm all room wala lagaye the q ki mere me kaam ni kar ra tha tum change kar lena
      //this.userService.getroom().subscribe(
      (response: any) => {
        this.slot = response;
        console.log(this.slot);
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


  add(){
   // console.log(this.member);
    this.loginService.getCurrentUser();
    this.setSlot=0;

    this.userService.bookparkingslot(this.member).subscribe(
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','Your slot is booked','success');
        window.location.reload();

        
      },
     // (error)=>{
       // console.log(error);
        //console.log(this.member);
       // console.log(this.member)
        //alert('something went wrong');
        // this.snack.open(' Something went wrong', '', {
        //   duration: 3000,
        // });
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned a custom error.
            // Handle the error based on the error code and message.
            switch (error.status) {
              case 400:
               // console.error(error.error.message);
               this.snack.open('you are working remote on that date.only employee who work from office can book the desk', '', {
                duration: 5000,
              });
                break;
              case 401:
                //console.error(error.error.message);
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
    // this.userService.getAllDeskBooked(this.member.employees.employeeId,this.member.date).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     alert('booked details');
        
    //   },
    //   (error)=>{
    //     console.log(error);
    //    // console.log(this.member);
    //     alert('something went wrong');
    //   }
    // )
    // console.log(this.member.date,this.member.employees.employeeId)
  }

  getValue(e:any)
  {
    console.log(e.source.value);
    this.member.slots.area.areaId=e.target.value

  }

  setNewVal(e:any)
  {
    
    this.member.slots.parkingSlotName=e.parkingSlotName;
    this.member.slots.parkingSlotId=e.parkingSlotId;
    this.setSlot=e.parkingSlotId;

    // console.log(e.deskName);
    // console.log(e.deskId);


  }


  viewBookingp()
  {
    //this.say=ManagedesklistComponent;
   // this.route.navigate(['user-dashboard/cafeteria'])

   this.login.getCurrentUser().subscribe((user: any) => {
    //this.login.setUser(user);
       if (this.login.getUserRole() == 'ROLE_ADMIN') {
         this.route.navigate(['admin/parkdetails']);
       }
   else if (this.login.getUserRole() == 'ROLE_EMPLOYEE') {
     this.route.navigate(['user-dashboard/parkdetails']);
   }
   else if (this.login.getUserRole() == 'ROLE_MANAGER') {
     this.route.navigate(['manager-dashboard/parkdetails']);

   }
   else if (this.login.getUserRole() == 'ROLE_CAFE_ADMIN') {
    this.route.navigate(['cafe-dashboard/parkdetails']);

  }  

   });



  }



}
