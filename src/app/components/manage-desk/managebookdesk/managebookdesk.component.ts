import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Floor } from 'src/app/services/Floor';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-managebookdesk',
  templateUrl: './managebookdesk.component.html',
  styleUrls: ['./managebookdesk.component.scss']
})
export class ManagebookdeskComponent implements OnInit {

  setSlot:number=0;
  showSlot:boolean=false;

  public floor_all={ 
    floorId: 0,
    floorNo: ""
}

floor: Floor[] = [];


public book_desk_all={
  
    deskName: '',
    floor: {
      floorId: 1,
      floorNo: "string"
    },
    buffer: false,
    deskId: 0
  
}

constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar,private userService:UserService) { }

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


addDesk()
{
  if(this.book_desk_all.floor.floorId===1){
    this.snack.open(' Select Floor', '', {
      duration: 3000,
    });
  }else{
  this.manageDeskService.addDesk(this.book_desk_all).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Desk Added succesfully','success');
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

setNewVal(e:any)
  {
    
    this.book_desk_all.floor.floorNo=e.floorNo;
    this.book_desk_all.floor.floorId=e.floorId;
    this.setSlot=e.floorId;

    console.log(this.book_desk_all);
    //console.log(e.areaId);


  }



}
