import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import { ManageParkingService } from 'src/app/services/manage-parking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageparkingarea',
  templateUrl: './manageparkingarea.component.html',
  styleUrls: ['./manageparkingarea.component.scss']
})
export class ManageparkingareaComponent implements OnInit {

  public area={ 
  areaId: 0,
  areaNo: ""
}

constructor(private manageParkingService:ManageParkingService,private snack: MatSnackBar) { }

ngOnInit(): void {
}

addArea()
{
  this.manageParkingService.addArea(this.area).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Area Added succesfully','success');
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
