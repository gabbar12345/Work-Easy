import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { Area } from 'src/app/services/area';
import { DeskService } from 'src/app/services/desk.service';
import { Floor } from 'src/app/services/Floor';
import { LoginService } from 'src/app/services/login.service';
import { ParkingService } from 'src/app/services/parking.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  //admin resouce
  employeewfo:number=0;
  bookeddesk:number=0;
  bookedslot:number=0;
  bookedroom:number=0;
  event:any;
  user:any;
  eTime:any;
  modalRef?:BsModalRef;
  date=new Date("2022-11-24");     //("2022-11-24");
  nextfive=this.date.getDate()+7;
  start = new Date();   //("02/05/2020")
  end = new Date(`2022-12-${this.nextfive}`);     //("02/10/2020");
  loop = new Date(this.start);
  data:any;
  d:String[]=[];
  to=this.start.toISOString().substring(0,10);
  public slot:any
  setSlot:number=0;
  showSlot:boolean=false;
  allslot:any;
  area: Area[] = [];
  setState:number=0;
  public desk1:any;
  alldesk:any;
  showDesk:boolean=false;
  floor: Floor[] = [];
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
    ,private deskService:DeskService,private adminResourceService:AdminResourceManagmentService,
    private route:Router,private mangedesk:ManageDeskSService) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();

    console.log('id print',this.user.principal.employee.employeeId)
    this.getwfo(5);
    console.log(this.d);
    this.loginService.getCurrentUser();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.member.employees=data.principal.employee;
      console.log(data.principal.employee)
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

    this.noOfEmployeeAttendingWFO(5);
    this.conferenceRoomBookingCount(5);
    this.bookParkingSlotsCount(5);
    this.bookDesksCount(5);
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

//Admin resource management
public noOfEmployeeAttendingWFO(value:any): void {
  this.adminResourceService.noOfEmployeeAttendingWFO(this.today.date).subscribe(
     (response: any) => {
      this.employeewfo = response;
    }
  );
}

public conferenceRoomBookingCount(value:any): void {
  this.adminResourceService.conferenceRoomBookingCount(this.today.date).subscribe(
     (response: any) => {
      this.bookedroom = response;
    }   
  );
}

public bookParkingSlotsCount(value:any): void {
  this.adminResourceService.bookParkingSlotsCount(this.today.date).subscribe(
     (response: any) => {
      this.bookedslot = response;
    }   
  );
}
public bookDesksCount(value:any): void {
  this.adminResourceService.bookDesksCount(this.today.date).subscribe(
     (response: any) => {
      this.bookeddesk = response;
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

  getwfo(v:any){    
    while (this.loop <= this.end){
      
      let day=this.loop.getDay()

      this.userService.wfo(this.user.principal.employee.employeeId,this.loop.toISOString().substring(0,10)).subscribe(
      (response:any) => {
        this.data = response;
        this.d[day]=(this.data)
        console.log(this.data,day);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    )
    console.log(this.loop);
    let newDate = this.loop.setDate(this.loop.getDate() + 1);
    this.loop = new Date(newDate);
     }

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
    console.log(this.user.principal.employee.employeeId,this.desk.employees.employeeId,this.to)
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
      (error)=>{
        console.log(error);
        //console.log(this.member);
        console.log(this.member)
        //alert('something went wrong');
        this.snack.open(' Something went wrong', '', {
          duration: 3000,
        });
      }
    )
    
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
      (response: any) => {
        this.desk1 = response;
        console.log(this.desk);
      },
      (error: HttpErrorResponse) => {
       
       console.log('Error !');
        console.log(error);
        
      }
    );
    
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
     (error)=>{
       console.log(error);
       this.snack.open(' Try again', '', {
         duration: 3000,
       });
     }
   )
 
 }
setNewVal2(e:any)
{
  this.bookdesk.desks.deskName=e.deskName;
  this.bookdesk.desks.deskId=e.deskId;
  this.setState=e.deskId;
  console.log(e.deskName);
  console.log(e.deskId);
}

empdetail(){
  this.route.navigate(['admin/EmployeeList'])
}
parkdetail(){
  this.route.navigate(['admin/ManageParking'])
}
deskdetail(){
  this.route.navigate(['admin/ManageDesk'])
}
roomdetail(){
  this.route.navigate(['admin/ManageRoom'])
}

}

