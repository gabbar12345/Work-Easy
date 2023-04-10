import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AdminResourceManagmentService } from '../services/admin-resource-managment.service';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parkbookingdetails',
  templateUrl: './parkbookingdetails.component.html',
  styleUrls: ['./parkbookingdetails.component.scss']
})
export class ParkbookingdetailsComponent implements OnInit {

  parkbooking:any;
  user:any=null;

  constructor(private _location: Location,private adminService:AdminResourceManagmentService,public userService:UserService,private login:LoginService) { }

  ngOnInit(): void {
    this.user=this.login.getUser();

    this.adminService.refreshNeeded$.subscribe(()  =>
    {
      this.getBookedSlotsOfEmployee();

    });

    this.getBookedSlotsOfEmployee();

  }

  getBookedSlotsOfEmployee()
  {
    this.adminService.getBookedSlotsOfEmployee(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
       this.parkbooking= response;
       console.log(this.parkbooking)
     }   
   );
  }


  goback(){
    this._location.back();
  }
  reject(v:any){
    console.log(v);
    this.userService.delparking(v,this.user).subscribe(
      (response: any) => {
        
       // console.log(this.req.requestId);
        
        console.log(response)
        this.getBookedSlotsOfEmployee();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
