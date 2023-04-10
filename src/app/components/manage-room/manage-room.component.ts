import { LivetrackComponent } from './livetrack/livetrack.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { ManageDeskFloorComponent } from '../manage-desk/manage-desk-floor/manage-desk-floor.component';
import { ManagebookdeskComponent } from '../manage-desk/managebookdesk/managebookdesk.component';
import { ManagedesklistComponent } from '../manage-desk/managedesklist/managedesklist.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { RoommanagmentComponent } from './roommanagment/roommanagment.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.scss']
})
export class ManageRoomComponent implements OnInit {

  say:any;
  

  constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private dialog:MatDialog,private modalService:BsModalService,
    private _location:Location) { }

  ngOnInit(): void {
    this.say=RoomlistComponent;
  }



  addF()
  {
    this.say=RoommanagmentComponent;
  }

  addB()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=RoomlistComponent;

  }
  addL()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=LivetrackComponent;

  }
  goback(){
    this._location.back();
  }

}
