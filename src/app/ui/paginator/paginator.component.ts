import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchDefaultersStore, viewDefaultersStore } from 'src/app/interface/interface';
import { savepagedefaulters } from 'src/app/redux/defaulters/pagedefaulters.actions';
import { paginatorviewdefaulters } from 'src/app/redux/viewdefaulters.actions';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() page = new EventEmitter<number>();
  pageDefaulters$:Observable<number>;
  pageDefaultersStore$?: number;
  searchDefaulters$:Observable<searchDefaultersStore>;
  searchDefaultersStore$?: searchDefaultersStore;
  actualPage=1;
  initialPage=1;
  finalPage=1;
  totalResults=1;
  constructor(
    private searchDefaulters:Store<{searchdefaulters:searchDefaultersStore}>,
    private pageDefaulters:Store<{pagedefaulters:number}>,
  ) {
    this.pageDefaulters$ = pageDefaulters.select('pagedefaulters');
    this.searchDefaulters$ = searchDefaulters.select('searchdefaulters');
   }

  ngOnInit(): void {
    this.searchDefaulters$.subscribe({
      next: res=>{
        this.searchDefaultersStore$=res;
      }
    });
    this.pageDefaulters$.subscribe({
      next: res=>{
        this.pageDefaultersStore$=res;
        this.initialPage=res;
      }
    });
  }
  getFinalPage():number{
    return this.searchDefaultersStore$!.paginator.finalPage;
  }
  getActualPage():number{
    return this.pageDefaultersStore$!;
  }
  next(){
    if(this.getFinalPage()>this.getActualPage()){
      this.searchDefaulters.dispatch(savepagedefaulters({page:this.getActualPage()+1}))
    }
  }
  after(){
    /*if(this.initialPage>1){
      this.initialPage=this.initialPage-1;
      this.page.emit(this.initialPage);
      this.storeDefaulters.dispatch(paginatorviewdefaulters({obj:this.getObj()}))
    }*/
      this.initialPage=this.initialPage-1;
      this.searchDefaulters.dispatch(savepagedefaulters({page:this.initialPage}))
  }
  /*getObj():viewDefaultersStore{
    return {
      search:{},
      paginator:{
        actualPage:this.actualPage,
        initialPage:this.initialPage,
        finalPage:this.finalPage,
        totalResults:this.viewDefaultersStore$?.paginator?.totalResults??0,
      }
    };
  }*/

}
