import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ManageParkingService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$()
  {
     return this._refreshNeeded$;
  }


  public addArea(area:any){
    return this.http.post(`${baseUrl}/workEasy/addArea/`,area)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }


  public addSlot(slot:any){
    return this.http.post(`${baseUrl}/workEasy/addParkingSlot/`,slot)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }

}
