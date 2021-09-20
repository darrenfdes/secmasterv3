import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  readonly APIUrl = "http://localhost:53535/api";
  readonly FileUrl = "http://localhost:53535/File";

  constructor(private http:HttpClient) { }

  upload(file: File): Observable<any> {
    const data = new FormData()
    data.append('file', file)
    console.log("Service called"+file.name)
    return this.http.post('http://localhost:53012/api/UploadFile', data)
  }




  // UploadFile(val:any){
  //   return this.http.post(this.APIUrl+'SaveFile',val)
  // }
  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = "http://localhost:53535/File";
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClent.post(endpoint, formData, { headers: yourHeadersConfig })
      

}
