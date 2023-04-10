import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../services/cafeteria.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.scss']
  
})
export class CafeteriaComponent implements OnInit {
  stalllist:any;
  fd:any=[];
  public cafeterialist:any= [];
  slist:any=[];
  constructor(private cafeteriaService:CafeteriaService,
    private route:Router,private login:LoginService) { }

  ngOnInit(): void {
    this.getAllCafeteriaList();
  }

  getAllCafeteriaList()
  {
    this.cafeteriaService.getAllCafeteriaList().subscribe(
      (response: any) => {
       this.cafeterialist= response;
       console.log(this.cafeterialist)
     }   
   );
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
   //this.route.navigate(['manager-dashboard/stall'],{queryParams:{data:this.fd}});



  
   this.login.getCurrentUser().subscribe((user: any) => {
     //this.login.setUser(user);
        if (this.login.getUserRole() == 'ROLE_ADMIN') {
          this.route.navigate(['admin/stall'],{queryParams:{data:this.fd}});
        }
    else if (this.login.getUserRole() == 'ROLE_EMPLOYEE') {
      this.route.navigate(['user-dashboard/stall'],{queryParams:{data:this.fd}});
    }
    else if (this.login.getUserRole() == 'ROLE_MANAGER') {
      this.route.navigate(['manager-dashboard/stall'],{queryParams:{data:this.fd}});

    } 
    });

  }

}
