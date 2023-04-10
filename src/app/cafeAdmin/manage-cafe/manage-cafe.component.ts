import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { AddcafeComponent } from './addcafe/addcafe.component';
import { AddstallsComponent } from './addstalls/addstalls.component';

@Component({
  selector: 'app-manage-cafe',
  templateUrl: './manage-cafe.component.html',
  styleUrls: ['./manage-cafe.component.scss']
})
export class ManageCafeComponent implements OnInit {
  say:any;


  constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private dialog:MatDialog,private modalService:BsModalService) { }
  modalRef?:BsModalRef;
  
    ngOnInit(): void {
      this.say=AddcafeComponent;
    }

    addF()
    {
    this.say=AddcafeComponent;
    }
    addD()
    {
    this.say=AddstallsComponent;
    }
 
  
}
