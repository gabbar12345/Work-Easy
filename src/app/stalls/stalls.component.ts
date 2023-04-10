import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-stalls',
  templateUrl: './stalls.component.html',
  styleUrls: ['./stalls.component.scss']
})
export class StallsComponent implements OnInit {
  public stallslist:any;
  stall:any;

  stringifiedData: any;  
  parsedJson: any;  

  public arr1:any=[];
  
  // Object Data  
  myData =  [
    {
    name: "Manav",  
    qualification: "M.C.A",  
    technology: "Angular"  
    }]
   

  constructor(
    private route:ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
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

    // for(let i=0;i< params.data.length;i++)
    // {
    //    this.arr1.push(JSON.parse(params.data[i]))
    //    console.log(this.arr1)
    // }

    // console.log(this.arr1)

    // this.stringifiedData = JSON.stringify(this.myData);  
    // console.log("With Stringify :" , this.stringifiedData);  
  
     // Parse from JSON  
    // this.parsedJson = JSON.parse(this.stringifiedData);  
    // console.log("With Parsed JSON :" , this.parsedJson);

    //var newString = this.stall.replace(/['\']/g,'');
    //var stallslist = JSON.parse(newString);
   // console.log(this.stallslist);
    })
  }
  goback(){
    this._location.back();
  }

}

