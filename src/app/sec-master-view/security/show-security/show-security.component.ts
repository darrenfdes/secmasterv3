import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-security',
  templateUrl: './show-security.component.html',
  styleUrls: ['./show-security.component.css']
})
export class ShowSecurityComponent implements OnInit {

  constructor(private service:SharedService) { }

  SecurityList:any=[];

  sid:any;

  ngOnInit(): void {
    this.refreshSecList();
  }

  refreshSecList(){
    this.service.getSecList().subscribe(data=>
      this.SecurityList=data
    );
  }

  softDelete(item){
    this.service.updateSecurity(item).subscribe(res=>{
      alert(res.toString());
    });
  }

}
