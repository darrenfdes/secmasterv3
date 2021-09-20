import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53012/api";


  constructor(private http:HttpClient) {   }

  getSecList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/GetTable');
  }
  updateSecurity(val:any){
    console.log(val)
    return this.http.delete('http://localhost:53012/api/Delete/'+val);
  }

  getTiles():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/GetTile');
  }

}
