import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchRevenueStore } from 'src/app/interface/interface';

@Component({
  selector: 'app-revenue-table',
  templateUrl: './revenue-table.component.html',
  styleUrls: ['./revenue-table.component.css']
})
export class RevenueTableComponent implements OnInit {

  searchRevenue$:Observable<searchRevenueStore>;
  searchRevenueStore$?: searchRevenueStore;
  constructor(
    private searchRevenue:Store<{searchrevenue:searchRevenueStore}>,
  ) { 
    this.searchRevenue$ = searchRevenue.select('searchrevenue');
  }

  ngOnInit(): void {
    this.searchRevenue$.subscribe({
      next: res=>{
        //console.log(res);
        this.searchRevenueStore$=res;
      }
    });
    /*this.search$.subscribe({
      next: res=>{if(res.btn==true && res.screen=='tech')this.deleteT();}
    });
    this.getZone();*/
  }
  detail(id:number){

  }

}
