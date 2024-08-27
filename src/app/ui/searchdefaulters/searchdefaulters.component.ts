import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-searchdefaulters',
  templateUrl: './searchdefaulters.component.html',
  styleUrls: ['./searchdefaulters.component.css']
})
export class SearchdefaultersComponent implements OnInit {

  constructor(
    private reportsService:ReportsService,
  ) { }

  ngOnInit(): void {
  }
  search(){
    this.reportsService.defaulters().subscribe({
        next: res=>{
          console.log(res);
        },
        error: err=>{
          //this.loading.showLoading('',false);
        }
      })
  }
  /*clear(){
    this.storeCuota.dispatch(initialviewcuota());
    this.searchform.reset();
    this.reset=of(true);
    this.zone=null;
  }*/
}
