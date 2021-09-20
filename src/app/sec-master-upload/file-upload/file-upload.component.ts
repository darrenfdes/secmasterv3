import { UploadService } from './../shared/services/upload.service';
import { Component, Input, OnInit } from '@angular/core';
import { compilePipeFromMetadata } from '@angular/compiler';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
 
  file: File | null = null;
  private subscription: Subscription | undefined;

  constructor(private service:UploadService) { }

  onFileInput(files: FileList | null): void {
    
    if (files) {
      this.file = files.item(0)
    }
  }

  onSubmit() {
    if (this.file) {
      this.subscription = this.service.upload(this.file).subscribe()
    }
  }

  
  ngOnInit(): void {
  }
}
// upload(event){
//   var file = event.target.files[0];
//   const formData:FormData = new FormData();
//   formData.append('uploadedFile',file,file.name);
//   this.service.UploadFile(formData).subscribe((data:any)=>{
    
//   })

  // uploadFileToActivity(){
  //   this.service.postFile(this.fileToUpload).subscribe(data=>{

  //   },error=>{
  //     console.log(error)
  //   })
  // }

  // uploadFileEvt(event: { target: { files: any[]; }; }){
  //   var file = event.target.files[0];
  //   const formData:FormData = new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadFile(formData)
  // }

