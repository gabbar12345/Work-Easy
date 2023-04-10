import { ParkingliveComponent } from './parkinglive/parkinglive.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ParkingComponent } from 'src/app/parking/parking.component';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { ManageDeskFloorComponent } from '../manage-desk/manage-desk-floor/manage-desk-floor.component';
import { ManagebookdeskComponent } from '../manage-desk/managebookdesk/managebookdesk.component';
import { ManagedesklistComponent } from '../manage-desk/managedesklist/managedesklist.component';
import { ManageparkingareaComponent } from './manageparkingarea/manageparkingarea.component';
import { ManageparkingslotComponent } from './manageparkingslot/manageparkingslot.component';
import { ParkingbookinglistComponent } from './parkingbookinglist/parkingbookinglist.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-manageparking',
  templateUrl: './manageparking.component.html',
  styleUrls: ['./manageparking.component.scss']
})
export class ManageparkingComponent implements OnInit {
  say:any;

  constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private dialog:MatDialog,private modalService:BsModalService,
    private _location: Location) { }
  modalRef?:BsModalRef;
  
    ngOnInit(): void {
      this.say=ParkingbookinglistComponent;
    }
    addA()
    {
      //this.modalRef=this.modalService.show(this.flooradd,this.config)
      this.say=ManageparkingareaComponent
    }
    addP()
    {
      //this.modalRef=this.modalService.show(this.flooradd,this.config)
      this.say=ManageparkingslotComponent
  
    }
    addVP()
    {
      //this.modalRef=this.modalService.show(this.flooradd,this.config)
      this.say=ParkingbookinglistComponent
  
    }
    addlt(){
      this.say=ParkingliveComponent
    }
    
    goback(){
      this._location.back();
    }
}
