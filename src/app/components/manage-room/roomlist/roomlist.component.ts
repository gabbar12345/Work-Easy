import { Component, OnInit } from '@angular/core';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {

  public roomdata:any= [];
  start = new Date();   //("02/05/2020")

  

  to=this.start.toISOString().substring(0,10);
  public today={
    date:`${this.to}`
  }
  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,private _location: Location) {
  }

  ngOnInit(): void {
    this.conferenceRoomBooking(5);
  }

  conferenceRoomBooking(value:any)
  {
    this.adminResourceService.conferenceRoomBooking(this.today.date).subscribe(
      (response: any) => {
       this.roomdata= response;
     }   
   );
  }

  goback(){
    this._location.back();
  }
}
