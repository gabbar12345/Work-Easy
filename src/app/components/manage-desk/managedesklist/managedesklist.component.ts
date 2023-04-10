import { Component, OnInit } from '@angular/core';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-managedesklist',
  templateUrl: './managedesklist.component.html',
  styleUrls: ['./managedesklist.component.scss']
})
export class ManagedesklistComponent implements OnInit {
  public employeedata:any= [];
  // Pagination parameters.
  p: any = 1;
  count:any = 5;
  start = new Date();   //("02/05/2020")

  

  to=this.start.toISOString().substring(0,10);
  public today={
    date:`${this.to}`
  };
  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,private _location: Location) {
 
    // this.employeedata = [
    //   { id: 1, 
    //     name: 'Clare Cornau'
    //     ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' },
    //     { id: 1, 
    //       name: 'Clare Cornau'
    //       ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' },
    //       { id: 1, 
    //         name: 'Clare Cornau'
    //         ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' },
    //         { id: 1, 
    //           name: 'Clare Cornau'
    //           ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' },
    //           { id: 1, 
    //             name: 'Clare Cornau'
    //             ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' },
    //             { id: 1, 
    //               name: 'Clare Cornau'
    //               ,phoneno: '(815) 6180492', email: 'ccornau0@bigcartel.com', gender: 'Female', nationality: '2022-09-11' }
          
        
      

            
  
    // ];
  }


  //constructor() { }

  ngOnInit(): void {
    this.deskBookings(5);
  }


  deskBookings(value:any)
  {
    this.adminResourceService.deskBookings(this.today.date).subscribe(
      (response: any) => {
       this.employeedata= response;
     }   
   );
  }

  goback(){
    this._location.back();
  }


}
