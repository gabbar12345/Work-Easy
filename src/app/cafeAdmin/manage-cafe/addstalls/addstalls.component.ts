import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { cafe } from 'src/app/services/cafe';
import { Floor } from 'src/app/services/Floor';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addstalls',
  templateUrl: './addstalls.component.html',
  styleUrls: ['./addstalls.component.scss']
})
export class AddstallsComponent implements OnInit {

  setSlot:number=0;
  showSlot:boolean=false;

//   public floor_all={ 
//     floorId: 0,
//     floorNo: ""
// }

cafe: cafe[] = [];


public add_stall={
  
  
  stallId: 1,
  stallName: "",
  stallStatus: "",
  cafeteria: {
    cafeId: 0,
    cafeName: "",
    floor: {
      floorId: 0,
      floorNo: ""
    },
    cafeStatus: ""
  }
}

constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private userService:UserService,private adminService:AdminResourceManagmentService) { }

ngOnInit(): void {
  this.getAllCafe();
}

public getAllCafe(): void {
  this.adminService.AllCafeList().subscribe(
    (response: any) => {
      this.cafe = response;
      console.log(this.cafe);
    },
    (error: HttpErrorResponse) => {
     // alert(error.message);
     this.snack.open(' No cafe avaiable', '', {
      duration: 3000,
    });
      
    }
  );
}


addStall()
{
  this.adminService.AddStll(this.add_stall).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Stall Added succesfully','success');

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
    
    this.add_stall.cafeteria.cafeName=e.cafeName;
    this.add_stall.cafeteria.cafeId=e.cafeId;
    this.add_stall.cafeteria.cafeStatus=e.cafeStatus;
    this.add_stall.cafeteria.floor.floorId=e.floorId;
    this.add_stall.cafeteria.floor.floorNo=e.floorNo;
    this.setSlot=e.cafeId;

    // console.log(e.areaNo);
    //console.log(e.areaId);


  }

}
