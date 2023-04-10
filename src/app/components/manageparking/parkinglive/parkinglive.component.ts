import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { UserService } from './../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Area } from 'src/app/services/area';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-parkinglive',
  templateUrl: './parkinglive.component.html',
  styleUrls: ['./parkinglive.component.scss']
})
export class ParkingliveComponent implements OnInit {
  public detail={
      "busySlots": [
        {
          "parkingSlotName": "",
          "area": {
            "areaId": 0,
            "areaNo": "string"
          },
          "parkingSlotId": 0,
          "buffer": true
        }
      ],
      "availableSlots": [
        {
          "parkingSlotName": "",
          "area": {
            "areaId": 0,
            "areaNo": "string"
          },
          "parkingSlotId": 0,
          "buffer": true
        }
      ]
  }
  listpark:any;
  modalRef?:BsModalRef;
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
  @ViewChild('template') template!:any;  
  constructor(public userService:UserService,
    public service:AdminResourceManagmentService,
    private modalService:BsModalService) { }

  ngOnInit(): void {
    this.getAllArea();
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
  getslot(v:any){
    
    this.service.parkdetail(this.member.slots.area.areaId).subscribe(
      (response: any) => {
        this.detail = response;
        console.log(this.detail);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }
  meetdetail(d:any){
    console.log(d);
    this.service.parkdetaillist(d).subscribe(
      (response: any) => {
        this.listpark = response;
        console.log(this.listpark);
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
