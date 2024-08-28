import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { viewDefaultersStore } from 'src/app/interface/interface';
import { paginatorviewdefaulters } from 'src/app/redux/viewdefaulters.actions';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() page = new EventEmitter<number>();
  viewDefaulters$:Observable<viewDefaultersStore>;
  viewDefaultersStore$?: viewDefaultersStore;
  actualPage=1;
  initialPage=1;
  finalPage=1;
  totalResults=1;
  constructor(
    private storeDefaulters:Store<{viewdefaulters:viewDefaultersStore}>,
  ) {
    this.viewDefaulters$=storeDefaulters.select('viewdefaulters');
   }

  ngOnInit(): void {
    this.viewDefaulters$.subscribe({
      next: res=>{
        //console.log(res);
        this.viewDefaultersStore$=res;
        this.finalPage=res.paginator!.finalPage;
        this.initialPage=res.paginator!.initialPage;
      }
    });
  }
  next(){
    //if(this.finalPage>this.initialPage){
      this.initialPage=this.initialPage+1;
      this.page.emit(this.initialPage);
      this.storeDefaulters.dispatch(paginatorviewdefaulters({obj:this.getObj()}))
    //}
  }
  after(){
    if(this.initialPage>1){
      this.initialPage=this.initialPage-1;
      this.page.emit(this.initialPage);
      this.storeDefaulters.dispatch(paginatorviewdefaulters({obj:this.getObj()}))
    }
  }
  getObj():viewDefaultersStore{
    return {
      search:{},
      paginator:{
        actualPage:this.actualPage,
        initialPage:this.initialPage,
        finalPage:this.finalPage,
        totalResults:this.viewDefaultersStore$?.paginator?.totalResults??0,
      }
    };
  }

}
