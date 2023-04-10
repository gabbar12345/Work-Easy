import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { LoginService } from './login.service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private login: LoginService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      //add the jwt token (localStorage) request
     // localStorage.setItem('jwtToken',JSON.stringify(data:any.jwtToken))

      let authReq = req;
      let jwtToken = this.login.getToken();
      // console.log(jwtToken);
      // console.log('inside interceptor');

      
      if(jwtToken)
      {
        jwtToken=jwtToken.replace(/^"(.*)"$/,'$1');
        //return jwtToken;
        // console.log(jwtToken);

      }
      if (jwtToken != null) {
        authReq = authReq.clone({
            
          setHeaders: { Authorization: 'Bearer ' + (this.login.getToken())?.replace(/^"(.*)"$/,'$1') },
          
          
        });
      }
      
     // let token=JSON.parse(`$(jwtToken)`);
    // console.log(`Bearer ${this.login.getToken()}`);


      return next.handle(authReq);
    }
  }
  
  export const authInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ];
  