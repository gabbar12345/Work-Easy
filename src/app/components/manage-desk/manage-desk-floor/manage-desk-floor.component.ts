import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-desk-floor',
  templateUrl: './manage-desk-floor.component.html',
  styleUrls: ['./manage-desk-floor.component.scss']
})
export class ManageDeskFloorComponent implements OnInit {

  public floor={ 
      floorId: 0,
      floorNo: ""
  }

  constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar) { }

  ngOnInit(): void {
    //this.addFloor();
  }

  addFloor()
  {
    this.manageDeskService.addFloor(this.floor).subscribe(
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','Floor Added succesfully','success');
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
