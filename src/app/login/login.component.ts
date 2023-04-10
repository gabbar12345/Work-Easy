import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  // constructor(
    
  //   //private router: Router
  // ) {}


  // ngOnInit(): void {
  // }
  fieldTextType!: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  loginData = {
    userName: '',
    password: '',
  };
  

  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}


  ngOnInit(): void {
  }
  formSubmit() {
    console.log('login btn clicked');
    if (
      this.loginData.userName.trim() == '' ||
      this.loginData.userName == null 
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);
       // localStorage.setItem('jwtToken', data.jwtToken); // localstorage is 'token' : undefined

        //login...
        this.login.loginUser(data.jwtToken);

        console.log(this.login.loginUser(data.jwtToken));
        
        //window.location.href="/admin"

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          //redirect ...ADMIN: admin-dashboard
          //redirect ...NORMAL:normal-dashboard
          if (this.login.getUserRole() == 'ROLE_ADMIN') {
            //admin dashboard
            // window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'ROLE_EMPLOYEE') {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'ROLE_MANAGER') {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.router.navigate(['manager-dashboard']);
            this.login.loginStatusSubject.next(true);
          } else if (this.login.getUserRole() == 'ROLE_CAFE_ADMIN') {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.router.navigate(['cafe-dashboard']);
            this.login.loginStatusSubject.next(true);
          } 
          //else {
            //this.login.logout();
          //}
        });
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }


    
}


