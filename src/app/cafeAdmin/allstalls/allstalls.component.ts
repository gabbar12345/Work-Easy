import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-allstalls',
  templateUrl: './allstalls.component.html',
  styleUrls: ['./allstalls.component.scss']
})
export class AllstallsComponent implements OnInit {
  public stallslist:any;
  stall:any;
  d:any;
  stringifiedData: any;  
  parsedJson: any;  
  public arr1:any=[];
  
  public stallId:any;
  public stalldata:any= [];
  public stallda=
  {
  
    stallId: 7,
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


  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,
    private route:ActivatedRoute,
    private _location: Location) {
  }

  ngOnInit(){

    this.route.queryParams.subscribe((params:any)=>{
    
      this.stall=JSON.stringify(params.data);
  
      //console.log("With Stringify :" ,this.stall);  
  
  
      for(let i=0;i< params.data.length;i++){
     // console.log(JSON.parse(params.data[i]),params.data.length)
      var checking=JSON.parse(params.data[i])
     // console.log(checking);
      this.arr1.push(checking)
  
      }
       console.log(this.arr1)
  
  
  
      this.stallslist=JSON.parse(this.stall);
      })
  }


  changeStatusOfStallToOpen(stallId:number)
  {
    this.adminResourceService.changeStatusOfStallToOpen(stallId,this.stallda).subscribe(
      (response: any) => {
       this.stallda= response;
       console.log(this.stallda.stallId);
       for(let i=0;i<this.arr1.length;i++){
        if(this.arr1[i].stallId == this.stallda.stallId){
          this.arr1[i].stallStatus=this.stallda.stallStatus;
          
        }
       }

     }   ,
     (error)=>{
      console.log(error);
    }
   );
   
   console.log(this.arr1);
  //  this.ngOnInit();
  }

  
  changeStatusOfStallToClose(stallId:number)
  {
    console.log('close',stallId);
    this.adminResourceService.changeStatusOfStallToClose(stallId,this.stallda).subscribe(
      (response: any) => {
       this.stallda= response;
       console.log(this.stallda);
       for(let i=0;i<this.arr1.length;i++){
        if(this.arr1[i].stallId == this.stallda.stallId){
          this.arr1[i].stallStatus=this.stallda.stallStatus;
        }
       }
     },
     (error)=>{
      console.log(error);
    }  
      
   );
  }

  goback(){
    this._location.back();
  }

}
