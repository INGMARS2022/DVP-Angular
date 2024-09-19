import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchRevenueStore } from 'src/app/interface/interface';
import { savepagerevenue } from 'src/app/redux/revenue/pagerevenue.actions';

@Component({
  selector: 'app-paginatorrevenue',
  templateUrl: './paginatorrevenue.component.html',
  styleUrls: ['./paginatorrevenue.component.css']
})
export class PaginatorrevenueComponent implements OnInit {

  pageRevenue$:Observable<number>;
  pageRevenueStore$?: number;
  searchRevenue$:Observable<searchRevenueStore>;
  searchRevenueStore$?: searchRevenueStore;
  actualPage=1;
  initialPage=1;
  finalPage=1;
  totalResults=1;
  constructor(
    private searchRevenue:Store<{searchrevenue:searchRevenueStore}>,
    private pageRevenue:Store<{pagerevenue:number}>,
  ) {
    this.pageRevenue$ = pageRevenue.select('pagerevenue');
    this.searchRevenue$ = searchRevenue.select('searchrevenue');
   }

  ngOnInit(): void {
    this.searchRevenue$.subscribe({
      next: res=>{
        this.searchRevenueStore$=res;
      }
    });
    this.pageRevenue$.subscribe({
      next: res=>{
        console.log(res);
        this.pageRevenueStore$=res;
        this.initialPage=res;
      }
    });
  }
  getFinalPage():number{
    return this.searchRevenueStore$!.paginator.finalPage;
  }
  getActualPage():number{
    return this.pageRevenueStore$!;
  }
  next(){
    if(this.getFinalPage()>this.getActualPage()){
      this.searchRevenue.dispatch(savepagerevenue({page:this.getActualPage()+1}))
    }
  }
  after(){
      this.initialPage=this.initialPage-1;
      this.searchRevenue.dispatch(savepagerevenue({page:this.initialPage}))
  }

}
