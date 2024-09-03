import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Layout } from 'src/app/interface/interface';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-layoutdetail',
  templateUrl: './layoutdetail.component.html',
  styleUrls: ['./layoutdetail.component.css']
})
export class LayoutdetailComponent implements OnInit {

  layout!:Layout;
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
    this.reports.layoutById(id).subscribe({
      next: res=>{
        this.layout=res;
        console.log(res);
      },
    });
  }

}
