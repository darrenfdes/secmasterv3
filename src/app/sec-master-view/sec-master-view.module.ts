import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { ShowSecurityComponent } from './security/show-security/show-security.component';
import { ShowStatusComponent } from './security/show-status/show-status.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    SecurityComponent,
    ShowSecurityComponent,
    ShowStatusComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class SecMasterViewModule { }
