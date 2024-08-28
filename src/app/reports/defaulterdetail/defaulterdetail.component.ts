import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Defaulters } from 'src/app/interface/interface';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-defaulterdetail',
  templateUrl: './defaulterdetail.component.html',
  styleUrls: ['./defaulterdetail.component.css']
})
export class DefaulterdetailComponent implements OnInit {
  defaulter!:Defaulters;
  constructor(
    private activeRoute: ActivatedRoute,
    private reports: ReportsService
  ) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: res=>{
        //console.log(res["id"]);
        this.getData(res["id"]);
      },
    });
  }
  getData(id:number){
    this.reports.defaultersById(id).subscribe({
      next: res=>{
        this.defaulter=res;
        console.log(res);
      },
    });
  }

}
