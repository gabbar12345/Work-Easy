import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();


  constructor(private http: HttpClient) {}



  //current user: which is loggedin
  public getCurrentUser() {

   // var reqHeader= new HttpHeaders(
     // {
       // 'Content-type': 'application/json',
        //'Authorization': 'Bearer '+ JSON.stringify(localStorage.getItem('jwtToken'))
     // }
    //);

    
    return this.http.get(`${baseUrl}/workEasy/userDetails`);
  // const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
  // return this.http.get<any[]>(this.webApiUrlEndPoint, { headers: reqHeader});


   //return this.http.get(`${baseUrl}/workEasy/getAllRoles`,{headers: reqHeader});
  }

  //generate token

  public generateToken(loginData: any) {
   
    
    return this.http.post(`${baseUrl}/authenticate`, loginData);
    
  }

  //login user: set token in localStorage
  public loginUser(token: string) {
    //console.log(token);

    localStorage.setItem('jwtToken', JSON.stringify( token));
    //console.log(JSON.stringify( token));
    
    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('jwtToken');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('jwtToken');
  }

  //set userDetail
 public setUser(user: any) {
  console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }


  public getManager(employeeId:number)
  {
    return this.http.get(`${baseUrl}/WorkEasy/employeeId/${employeeId}`);
  }


  public nextDayInOffice(employeeId:number)
  {
    return this.http.get(`${baseUrl}/workEasy/nextDayIntheOffice/${employeeId}`)

  }

  public wfoDays(employeeId:number)
  {
   return this.http.get(`${baseUrl}/workEasy/ListOfWFODAYS/${employeeId}`);
  }
}
