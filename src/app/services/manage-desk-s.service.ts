import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject, tap } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ManageDeskSService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$()
  {
     return this._refreshNeeded$;
  }


  public addFloor(floor:any){
    return this.http.post(`${baseUrl}/workEasy/addFloor/`,floor)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }


  public addDesk(desk:any){
    return this.http.post(`${baseUrl}/workEasy/addDesk/`,desk)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }

  public addRoom(room:any){
    return this.http.post(`${baseUrl}/workEasy/addRoom/`,room)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public delbooking(id:any,st:any){
    return this.http.put(`${baseUrl}/workEasy/CancelParkingSlot/${id}`,st)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public delbookingdesk(id:any,st:any){
    return this.http.put(`${baseUrl}/workEasy/CancelDesk/${id}`,st)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );
  }
  




}
