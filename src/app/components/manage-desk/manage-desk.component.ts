
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeskComponent } from 'src/app/desk/desk.component';
import { ParkingComponent } from 'src/app/parking/parking.component';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import Swal from 'sweetalert2';
import { ManageDeskFloorComponent } from './manage-desk-floor/manage-desk-floor.component';
import { ManagebookdeskComponent } from './managebookdesk/managebookdesk.component';
import { ManagedesklistComponent } from './managedesklist/managedesklist.component';
import {Location} from '@angular/common';
import { LivedeskComponent } from './livedesk/livedesk.component';
@Component({
  selector: 'app-manage-desk',
  templateUrl: './manage-desk.component.html',
  styleUrls: ['./manage-desk.component.scss']
})
export class ManageDeskComponent implements OnInit {
  say:any;
  //for floor
  // public floor={ 
  //   floorId: 0,
  //   floorNo: ""
  //  }


  //  //for deskadd
  //  public deskadd={
    
  //     deskName: "string",
  //     floor: {
  //       floorId: 0,
  //       floorNo: "string"
  //     },
  //     buffer: true,
  //     deskId: 0
    
  //  }

constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private dialog:MatDialog,private modalService:BsModalService,
  private _location:Location) { }
modalRef?:BsModalRef;

  ngOnInit(): void {
    this.say=ManagedesklistComponent;
  }
  // config={
  //   animated:true
    
  // }

 // @ViewChild('flooradd') flooradd!:any;
  // addFloor()
  // {
  //   this.manageDeskService.addFloor(this.floor).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       //alert('success');
  //       Swal.fire('Success','Floor Added succesfully','success');

  //     },
  //     (error)=>{
  //       console.log(error);
  //       //alert('something went wrong');
  //       this.snack.open(' Something went wrong', '', {
  //         duration: 3000,
  //       });
  //     }
  //   )


  // }

  // // addDesk()
  // {
  //   this.manageDeskService.addDesk(this.deskadd).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       //alert('success');
  //       Swal.fire('Success','Desk Added succesfully','success');

  //     },
  //     (error)=>{
  //       console.log(error);
  //       //alert('something went wrong');
  //       this.snack.open(' Something went wrong', '', {
  //         duration: 3000,
  //       });
  //     }
  //   )


  


  // addF(){
  //   //console.log('clicked');
  //   this.dialog.open(ManageDeskFloorComponent,{width:"50%"});
  // }

  addF()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=ManageDeskFloorComponent
  }
  addD()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=ManagebookdeskComponent

  }
  addB()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=ManagedesklistComponent

  }

  addL()
  {
    //this.modalRef=this.modalService.show(this.flooradd,this.config)
    this.say=LivedeskComponent;

  }
  goback(){
    this._location.back();
  }
}

