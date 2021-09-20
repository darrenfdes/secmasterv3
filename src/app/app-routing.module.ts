import { FileUploadComponent } from './sec-master-upload/file-upload/file-upload.component';
import { SecurityComponent } from './sec-master-view/security/security.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"upload",component:FileUploadComponent},
  {path:"view",component: SecurityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
