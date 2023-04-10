import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { Floor } from 'src/app/services/Floor';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcafe',
  templateUrl: './addcafe.component.html',
  styleUrls: ['./addcafe.component.scss']
})
export class AddcafeComponent implements OnInit {

  setSlot:number=0;
  showSlot:boolean=false;

  public floor_all={ 
    floorId: 0,
    floorNo: ""
}

floor: Floor[] = [];


public add_cafe={
  
  
    cafeId: 4,
    cafeName: "",
    floor: {
      floorId: 0,
      floorNo: ""
    },
    cafeStatus: ""
}

constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private userService:UserService,private adminService:AdminResourceManagmentService) { }

ngOnInit(): void {
  this.getAllFloor();
}

public getAllFloor(): void {
  this.userService.getallfloor().subscribe(
    (response: any) => {
      this.floor = response;
      console.log(this.floor);
    },
    (error: HttpErrorResponse) => {
     // alert(error.message);
     this.snack.open(' No desk avaiable', '', {
      duration: 3000,
    });
      
    }
  );
}


addCafe()
{
  this.adminService.AddCafe(this.add_cafe).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Cafe Added succesfully','success');

    },
    (error)=>{
      console.log(error);
      //alert('something went wrong');
      this.snack.open(' Something went wrong', '', {
        duration: 3000,
      });
    }
  )


}

setNewVal(e:any)
  {
    
    this.add_cafe.floor.floorNo=e.floorNo;
    this.add_cafe.floor.floorId=e.floorId;
    this.setSlot=e.floorId;

    // console.log(e.areaNo);
    //console.log(e.areaId);


  }


}
