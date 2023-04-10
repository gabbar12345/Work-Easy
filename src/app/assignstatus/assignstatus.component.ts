import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignformComponent } from './assignform/assignform.component';

@Component({
  selector: 'app-assignstatus',
  templateUrl: './assignstatus.component.html',
  styleUrls: ['./assignstatus.component.scss']
})
export class AssignstatusComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  newMeet(){
    console.log('clicked');
    this.dialog.open(AssignformComponent,{width:"50%"});
  }


}
