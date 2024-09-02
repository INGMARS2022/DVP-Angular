import { Component, OnInit } from '@angular/core';
import { Revenue } from 'src/app/interface/interface';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-revenuedetail',
  templateUrl: './revenuedetail.component.html',
  styleUrls: ['./revenuedetail.component.css']
})
export class RevenuedetailComponent implements OnInit {
  revenue!: Revenue;
  constructor(
    private activeRoute: ActivatedRoute,
    private reports: ReportsService
  ) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: res => {
        //console.log(res["id"]);
        this.getData(res["id"]);
      },
    });
  }
  getData(id: number) {
    this.reports.revenueById(id).subscribe({
      next: res => {
        this.revenue = res;
        console.log(res);
      },
    });
  }

}
