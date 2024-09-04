import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pay } from 'src/app/interface/interface';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-paydetail',
  templateUrl: './paydetail.component.html',
  styleUrls: ['./paydetail.component.css']
})
export class PaydetailComponent implements OnInit {

  pay!:Pay;
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
    this.reports.payById(id).subscribe({
      next: res=>{
        this.pay=res;
        console.log(res);
      },
    });
  }

}
