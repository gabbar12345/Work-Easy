import { Component, OnInit } from '@angular/core';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-parkingbookinglist',
  templateUrl: './parkingbookinglist.component.html',
  styleUrls: ['./parkingbookinglist.component.scss']
})
export class ParkingbookinglistComponent implements OnInit {
  public parkingdata:any= [];
  start = new Date();   //("02/05/2020")
  to=this.start.toISOString().substring(0,10);
  public today={
    date:`${this.to}`
  }
  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,private _location: Location
    ) {
  }

  ngOnInit(): void {
    this.ParkingSlotBookings(5);
  }

  ParkingSlotBookings(value:any)
  {
    this.adminResourceService.ParkingSlotBookings(this.today.date).subscribe(
      (response: any) => {
       this.parkingdata= response;
     }   
   );

  }

  goback(){
    this._location.back();
  }

}
