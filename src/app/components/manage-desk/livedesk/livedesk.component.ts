import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { Floor } from 'src/app/services/Floor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-livedesk',
  templateUrl: './livedesk.component.html',
  styleUrls: ['./livedesk.component.scss']
})
export class LivedeskComponent implements OnInit {
  modalRef?:BsModalRef;
  

  @ViewChild('template') template!:any;

  public bookdesk={
    

    bookingId: 9,
    startTime: "",
    endTime: "",
    desks: {
      deskName: "",
      floor: {
        floorId: 1,
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

  public room=
  {
    busyDesks: [
      {
        deskName: "",
        floor: {
          floorId: 0,
          floorNo: ""
        },
        buffer: false,
        deskId: 0
      },
          ],
    availableDesks: [
      {
        deskName: "",
        floor: {
          floorId: 0,
          floorNo: ""
        },
        buffer: true,
        deskId: 0
      },
    ]
  }
      

  
  floor: Floor[] = [];

  public floor_deks ={
    floorId: 25,
    floorNo: ""

  }

  detail:any;
  test=["Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room3","Room4","Room5","Room6"];
  constructor(private service:AdminResourceManagmentService,private userService:UserService,private modalService:BsModalService) { }

  ngOnInit(): void {

    //this.getroom();
    this.getAllFllor();

  }

  getroom(value:any){
    this.service.getliveDesk(this.bookdesk.desks.floor.floorId).subscribe(
      (response: any) => {
        this.room = response;
        console.log(this.room);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message)
      }
    );
  }


  public getAllFllor(): void {
    this.userService.getallfloor().subscribe(
      (response: any) => {
        this.floor = response;
        console.log(this.floor);
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
     //  this.snack.open(' No desk avaiable', '', {
       // duration: 3000,
     // });
        
      }
    );
  }

  meetdetail(d:any){
    console.log(d);
    this.service.deskdetail(d).subscribe(
      (response: any) => {
        this.detail = response;
        console.log(this.detail);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message)
      }
    );
    this.modalRef=this.modalService.show(this.template,{
      animated: true,
      class: 'modal-dialog-centered',
  })
  }


}
