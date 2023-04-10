import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { getLocaleNumberFormat } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-livetrack',
  templateUrl: './livetrack.component.html',
  styleUrls: ['./livetrack.component.scss']
})
export class LivetrackComponent implements OnInit {
  room:any;
  detail:any;
  modalRef?:BsModalRef;
  test=["Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room2","Room3","Room4","Room5","Room6","Room1","Room3","Room4","Room5","Room6"];
  @ViewChild('template') template!:any;
  constructor(private service:AdminResourceManagmentService,
    private modalService:BsModalService) { }

  ngOnInit(): void {
    this.getroom();
  }
  getroom(){
    this.service.getliveroom().subscribe(
      (response: any) => {
        this.room = response;
        console.log(this.room);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message)
      }
      
    );
  }
  meetdetail(d:any){
    console.log(d);
    this.service.meetdetail(d).subscribe(
      (response: any) => {
        this.detail = response;
        console.log(this.detail);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message)
      }
    );
    this.modalRef=this.modalService.show(this.template,{
      animated: true,
      class: 'modal-dialog-centered',
  })
  }
}
