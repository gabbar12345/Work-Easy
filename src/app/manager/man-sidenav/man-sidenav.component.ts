import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-man-sidenav',
  templateUrl: './man-sidenav.component.html',
  styleUrls: ['./man-sidenav.component.scss']
})
export class ManSidenavComponent implements OnInit {
  user:any;
  request:any;
  notification:any;
  sideBarOpen=true;
  constructor(private userService:UserService,private loginService:LoginService,private snack: MatSnackBar,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
    this.pendingM();
    this.userService.refreshNeeded$.subscribe(()  =>
    {
      this.pendingM();

    });
    
  
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen
  }
  pendingM(){
    this.userService.pendingM(this.user.principal.employee.employeeId).subscribe(
      (response: any) => {
        
        this.request = response;
        this.notification=this.request.length;
        console.log(this.request);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
      }
    );
  }
}
