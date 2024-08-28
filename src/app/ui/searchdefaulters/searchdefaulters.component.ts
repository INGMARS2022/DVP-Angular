import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationDefaulters, viewDefaultersStore } from 'src/app/interface/interface';
import { saveviewdefaulters } from 'src/app/redux/viewdefaulters.actions';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-searchdefaulters',
  templateUrl: './searchdefaulters.component.html',
  styleUrls: ['./searchdefaulters.component.css']
})
export class SearchdefaultersComponent implements OnInit {
  viewDefaulters$:Observable<viewDefaultersStore>;
  viewDefaultersStore$?: viewDefaultersStore;
  page:number=1;
  constructor(
    private reportsService:ReportsService,
    private storeDefaulters:Store<{viewdefaulters:viewDefaultersStore}>
  ) { 
    this.viewDefaulters$=storeDefaulters.select('viewdefaulters');
  }

  ngOnInit(): void {
    this.viewDefaulters$.subscribe({
      next: res=>{
        console.log(res);
        //this.viewDefaultersStore$ = res;
        //this.search();
      }
    });
  }
  search(){
    console.log(this.page + " search page");
    this.reportsService.defaulters(this.page-1,"null","null","null").subscribe({
      next: res=>{
        console.log(res.content);
        this.setStore(res);
      },
      error: err=>{
      }
    })
    
  }
  setStore(res:PaginationDefaulters){
    let obj:viewDefaultersStore= {
      search:{
      },
      results:res.content,
      paginator:{
        totalResults:res.totalElements,
        initialPage:1,
        finalPage: 1,
        actualPage:1
      }
    };
    //if(page==0){obj.paginator!.initialPage=1}
    this.storeDefaulters.dispatch(saveviewdefaulters({obj:obj}));
  }
  /*clear(){
    this.storeCuota.dispatch(initialviewcuota());
    this.searchform.reset();
    this.reset=of(true);
    this.zone=null;
  }*/
}
