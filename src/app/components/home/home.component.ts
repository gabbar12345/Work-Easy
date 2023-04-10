import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:any=null;
  managerDetail:any;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.user=this.login.getUser();
    this.getManager()
  }


  public getManager()
  {
    this.login.getManager(this.user.principal.employee
.      managerId).subscribe(
      (response: any) => {
       this.managerDetail= response;
       console.log(this.managerDetail);
     }   
   );

  }

}
