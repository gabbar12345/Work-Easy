import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Area } from 'src/app/services/area';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { ManageParkingService } from 'src/app/services/manage-parking.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageparkingslot',
  templateUrl: './manageparkingslot.component.html',
  styleUrls: ['./manageparkingslot.component.scss']
})
export class ManageparkingslotComponent implements OnInit {

  public area_all={ 
    areaId: 0,
    areaNo: ""
  }

area: Area[] = [];

setSlot:number=0;
  showSlot:boolean=false;

public book_slot_all={
  
  parkingSlotName: "",
  area: {
    areaId: 0,
    areaNo: ""
  },
  buffer: false,
  parkingSlotId: 0

  
}

constructor(private manageParkingService:ManageParkingService,private snack: MatSnackBar,private userService:UserService) { }

ngOnInit(): void {
  this.getAllArea();
}

public getAllArea(): void {
  this.userService.getAllParkingArea().subscribe(
    (response: any) => {
      this.area = response;
      console.log(this.area);
    },
    (error: HttpErrorResponse) => {
     // alert(error.message);
     this.snack.open(' No Area avaiable', '', {
      duration: 3000,
    });
      
    }
  );
}
setNewVal(e:any)
  {
    
    this.book_slot_all.area.areaNo=e.areaNo;
    this.book_slot_all.area.areaId=e.areaId;
    this.setSlot=e.areaId;

     console.log(this.book_slot_all);
    // console.log(e.areaId);


  }


addSlot()
{
  if(this.book_slot_all.area.areaId===0){
    this.snack.open(' Select Area', '', {
      duration: 3000,
    });
  }else{
  this.manageParkingService.addSlot(this.book_slot_all).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Slot Added succesfully','success');
      window.location.reload();


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

}

}
