import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.css']
})
export class ShowStatusComponent implements OnInit {

  
  activeSecurities:any = {}
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.statusList();
    console.log(this.activeSecurities)
  }
  statusList(){
    this.service.getTiles().subscribe(data=>
      this.activeSecurities=data
    );
  }

  
  
}
