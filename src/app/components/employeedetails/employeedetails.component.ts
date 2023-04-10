import { Component, OnInit } from '@angular/core';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  public employeedata:any= [];

  start = new Date();   //("02/05/2020")
  status:any='WFO';
  

  to=this.start.toISOString().substring(0,10);
  public today={
    date:`${this.to}`
  }
  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,private _location: Location
    ) {
  }

  ngOnInit(): void {
    this.EmployeesAttendingWFO(5);
  }

  EmployeesAttendingWFO(value:any)
  {
    this.adminResourceService.EmployeesAttendingWFO(this.today.date).subscribe(
      (response: any) => {
       this.employeedata= response;
     }   
   );
  }

  goback(){
    this._location.back();
  }


}
