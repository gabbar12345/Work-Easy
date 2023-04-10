import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ManageDeskSService } from 'src/app/services/manage-desk-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roommanagment',
  templateUrl: './roommanagment.component.html',
  styleUrls: ['./roommanagment.component.scss']
})
export class RoommanagmentComponent implements OnInit {

  public room={
    roomId: 0,
    hallName: "",
    capacity: 0

  }

constructor(private manageDeskService:ManageDeskSService,private snack: MatSnackBar) { }

ngOnInit(): void {
}

addRoom()
{
  this.manageDeskService.addRoom(this.room).subscribe(
    (data)=>{
      console.log(data);
      //alert('success');
      Swal.fire('Success','Room Added succesfully','success');
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
