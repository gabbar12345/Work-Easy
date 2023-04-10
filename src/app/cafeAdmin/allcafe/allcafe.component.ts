import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminResourceManagmentService } from 'src/app/services/admin-resource-managment.service';
import { cafe } from 'src/app/services/cafe';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-allcafe',
  templateUrl: './allcafe.component.html',
  styleUrls: ['./allcafe.component.scss']
})
export class AllcafeComponent implements OnInit {

  public cafedata:any=[];
 // public request: cafe[]=[];

 stalllist:any;
 fd:any=[];

  public caf={
    cafeId: 7,
    cafeName: "",
    floor: {
      floorId: 0,
      floorNo: ""
    },
    cafeStatus: ""
  }


  // title = 'Angular Pagination Tutorial';

  constructor(private adminResourceService:AdminResourceManagmentService,
    private cafeteriaService:CafeteriaService,
    private route:Router,private login:LoginService ) {
  }

  ngOnInit(): void {
    this.adminResourceService.refreshNeeded$
    .subscribe(()  =>
    {
      this.AllCafeList();

    });

    this.AllCafeList();

    
  }

  AllCafeList()
  {
    this.adminResourceService.AllCafeList().subscribe(
      (response: any) => {
       this.cafedata= response;
     }   
   );
  }

  public updateToClose(cafeId:number)
  {
        this.adminResourceService.changeStatusOfCafeToClose(cafeId,this.caf).subscribe(
          (response:any) =>
          {
            this.caf=response;
            console.log(this.caf);
            
          }
        )
  }

  public updateToOpen(cafeId:number)
  {
        this.adminResourceService.changeStatusOfCafeToOpen(cafeId,this.caf).subscribe(
          (response:any) =>
          {
            this.caf=response;
            console.log(this.caf);
            
          }
        )
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: cafe[] = [];
    for (const e of this.cafedata) {
      if (e.cafeName.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(e);
      }
    }
    this.cafedata= results;
    if (results.length === 0 || !key) {
      this.AllCafeList();
    }
  }

  stat(e:any){
    console.log(e);
    this.cafeteriaService.getStalls(e.cafeId).subscribe(
      (response: any) => {
       this.stalllist= response;
       console.log(this.stalllist)
     }   
   );
   for(let i=0;i<this.stalllist.length;i++){
   this.fd.push([JSON.stringify(this.stalllist[i])]);
   }
   console.log(this.fd);
   this.route.navigate(['cafe-dashboard/allstall'],{queryParams:{data:this.fd}});



  
  

  }


}
