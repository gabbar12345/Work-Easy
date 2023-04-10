import { LoginService } from './../../services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Area } from 'src/app/services/area';
import { ParkingService } from 'src/app/services/parking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Floor } from 'src/app/services/Floor';
import { DeskService } from 'src/app/services/desk.service';
import { CalendarOptions } from '@fullcalendar/core';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.scss']
})
export class EmpdashboardComponent implements OnInit {
  user:any;
  eTime:any;
  modalRef?:BsModalRef;
  start = new Date(); 
  ans:any;
  
  loop = new Date(); 
  getmonth=this.loop.getMonth()  
  // nextfive=this.loop.getDate()+7;
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  end:any=[]; 
  k = this.start.setDate(this.start.getDate() + 4); 
  en=new Date(this.k);   
  ad:boolean=true;  
  data:any;
  d:any=[];
  to=new Date().toISOString().substring(0,10);

  public slot:any
  setSlot:number=0;
  showSlot:boolean=false;
  allslot:any;
  area: Area[] = [];
  setState:number=0;
  public desk1:any;
  alldesk:any;
  status:any;
  showDesk:boolean=false;
  floor: Floor[] = [];
  event:any;
  public today={
    date:`${this.to}`
  }
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
      date: "",
      canceled: false
    } 
  public desk={
    
    bookingId: null,
    startTime: "",
    endTime: "",
    desks: {
      deskName: "",
      floor: {
        floorId: 0,
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
  public parking={
    bookingId: null,
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
    date: "",
    canceled: false
  }    
  config={
    animated:true
    
  }

  @ViewChild('extend') extend!:any;
  @ViewChild('extparking') extparking!:any;
  @ViewChild('paarking') paarking!:any;
  @ViewChild('deskpop') deskpop!:any;
  constructor(private userService:UserService,
    private loginService:LoginService,
    private modalService:BsModalService,private parkingService:ParkingService,private snack: MatSnackBar
    ,private deskService:DeskService,
    private mangedesk:ManageDeskSService,private route:Router) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
    console.log('id print',this.to);
    this.getwfo(5);
    this.even(5);
    this.loginService.getCurrentUser();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.member.employees=data.principal.employee;
      console.log(data.principal.employee);
      this.stat(5);
    })
    this.getAllArea();
    this.getAllParkingSlots();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.bookdesk.employees=data.principal.employee;
      console.log(data.principal.employee)
    })
    this.getAllDesks();
    this.getAllAvailableDesk();
    this.userService.refreshNeeded$
    .subscribe(()  =>
    {
      this.getwfo(5);

    });
    this.getwfo(5);

    this.nextDayInOffice(this.user.principal.employee.employeeId);

  }
  even(value:any){
    console.log(this.today);
    this.userService.ent(this.user.principal.employee.employeeId,this.today.date).subscribe(
      (response:any) => {
        this.event = response;
        console.log(this.event);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    )
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

  nextDayInOffice(employeeId:number)
  {
    this.loginService.nextDayInOffice(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
         this.ans=response;
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log(error);
      })
  }
 
  getwfo(value:any){ 
     
    while (this.loop <= this.en){
      
      let day=this.loop.getDay()
      let dat=this.loop.getDate()
      

      this.userService.wfo(this.user.principal.employee.employeeId,this.loop.toISOString().substring(0,10)).subscribe(
      (response:any) => {
        this.data = response;
        this.d[day]=(this.data);
        this.end[day]=dat; 
        console.log(this.d[day],this.loop);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    )
    
    let newDate = this.loop.setDate(this.loop.getDate() + 1);
    this.loop = new Date(newDate);
     }
     console.log(this.end);
     //get booked details by user/id
    this.userService.getAllDeskBooked(this.user.principal.employee.employeeId,this.today.date).subscribe(
      (data:any)=>{
        this.desk=data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
      }
    )

    this.userService.getParkingBookedDetails(this.user.principal.employee.employeeId,this.today.date).subscribe(
      
      (data:any)=>{
        this.parking=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }

    )
    // console.log(this.user.principal.employee.employeeId,this.desk.employees.employeeId,this.to)
  }
  ext(){
    this.modalRef=this.modalService.show(this.extend,this.config)
  }
  extp(){
    this.modalRef=this.modalService.show(this.extparking,this.config);
  }
  extTime(id:any){
    this.userService.ext(id,this.eTime).subscribe(
      (response: any) => {
        
        console.log(id,response);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log(error);
      })
    //  this.ngOnInit();
    //  this.getwfo();
  }
  extPark(id:any){
    this.userService.extp(id,this.eTime).subscribe(
      (response: any) => {
        
        console.log('hello',id,response);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log(error);
      })
      //this.ngOnInit();
     // this.ngOnInit();
      //this.getwfo();
  }

  
  
  // parkin component ts start
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
       
       console.log('Error !');
        console.log(error);
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
        
      },
      // (error)=>{
      //   console.log(error);
      //     this.snack.open(' Something went wrong', '', {
      //     duration: 3000,
      //   });
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
              duration: 3000,
            });
              break;
            case 500:
              console.error('Server error');
              break;
            default:
              console.error(error.error.message);
              break;
          }
        }
      }
    )
    //window.location.reload();
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
  }
  parkpopup(){
    this.modalRef=this.modalService.show(this.paarking,this.config)
  }
  // parkin ts end
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
        this.desk1 = response;
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
deskpopup(){
  this.modalRef=this.modalService.show(this.deskpop,this.config)
}
adddesk(){
  // console.log(this.bookdesk);
   this.loginService.getCurrentUser();
   this.setState=0;
   this.userService.bookDesk(this.bookdesk).subscribe(
     (data)=>{
       console.log(data);
       //alert('success');
     Swal.fire('Success','Your desk is booked','success');

       
     },
    //  (error)=>{
    //    console.log(error);
    //    this.snack.open(' Try again', '', {
    //      duration: 3000,
    //    });
    //  }
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
  //  window.location.reload();
 }
setNewVal2(e:any)
{
  this.bookdesk.desks.deskName=e.deskName;
  this.bookdesk.desks.deskId=e.deskId;
  this.setState=e.deskId;
  console.log(e.deskName);
  console.log(e.deskId);
}
stat(value:any){
  this.userService.status(this.user.principal.employee.employeeId,this.today.date).subscribe(
    (response) => {
      this.status = response;
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
delbookingslot(id:any){
  this.mangedesk.delbooking(id,this.parking).subscribe(
    (response: any) => {
      console.log(this.alldesk);
      this.snack.open(' Cancelled Successfully', '', {
        duration: 3000,
      });
    },
    (error: HttpErrorResponse) => {
      //alert(error.message);
      this.snack.open(' No desk avaiable', '', {
        duration: 3000,
      });
    }
  );
  window.location.reload();
}
delbookingdesk(id:any){
  console.log(id);
  this.mangedesk.delbookingdesk(id,this.desk).subscribe(
    (response: any) => {
      console.log(this.alldesk);
      this.snack.open(' Cancelled Successfully', '', {
        duration: 3000,
      });
    },
    (error: HttpErrorResponse) => {
      //alert(error.message);
      this.snack.open(' No desk avaiable', '', {
        duration: 3000,
      });
    }
  );
  window.location.reload();
}
}
