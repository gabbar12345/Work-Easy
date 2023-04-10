import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AdminResourceManagmentService } from '../services/admin-resource-managment.service';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deskbookingdetails',
  templateUrl: './deskbookingdetails.component.html',
  styleUrls: ['./deskbookingdetails.component.scss']
})
export class DeskbookingdetailsComponent implements OnInit {
  booking:any;
  user:any=null;
  desk_detail:any;

  constructor(private _location: Location,private adminService:AdminResourceManagmentService,private userService:UserService,private login:LoginService) { }

  ngOnInit(): void {
    this.user=this.login.getUser();

    this.adminService.refreshNeeded$.subscribe(()  =>
    {
      this.getBookedDeskOfEmployeeFromCurrentDate();

    });
   this.getBookedDeskOfEmployeeFromCurrentDate();

  }

  goback(){
    this._location.back();
  }


  getBookedDeskOfEmployeeFromCurrentDate()
  {
    this.adminService.getBookedDeskOfEmployeeFromCurrentDate(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
       this.booking= response;
       console.log(this.booking)
     }   
   );
  }
reject(v:number){
    this.userService.delbooking(v,this.user).subscribe(
      (response: any) => {
        
       // console.log(this.req.requestId);
        
        console.log(response)
        this.getBookedDeskOfEmployeeFromCurrentDate();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

}


}
