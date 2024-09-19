import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchLayoutStore } from 'src/app/interface/interface';
import { savepagelayout } from 'src/app/redux/layout/pagelayout.actions';

@Component({
  selector: 'app-paginatorlayout',
  templateUrl: './paginatorlayout.component.html',
  styleUrls: ['./paginatorlayout.component.css']
})
export class PaginatorlayoutComponent implements OnInit {

  pageLayout$:Observable<number>;
  pageLayoutStore$?: number;
  searchLayout$:Observable<searchLayoutStore>;
  searchLayoutStore$?: searchLayoutStore;
  actualPage=1;
  initialPage=1;
  finalPage=1;
  totalResults=1;
  constructor(
    private searchLayout:Store<{searchlayout:searchLayoutStore}>,
    private pageLayout:Store<{pagelayout:number}>,
  ) {
    this.pageLayout$ = pageLayout.select('pagelayout');
    this.searchLayout$ = searchLayout.select('searchlayout');
   }

  ngOnInit(): void {
    this.searchLayout$.subscribe({
      next: res=>{
        this.searchLayoutStore$=res;
      }
    });
    this.pageLayout$.subscribe({
      next: res=>{
        console.log(res);
        this.pageLayoutStore$=res;
        this.initialPage=res;
      }
    });
  }
  getFinalPage():number{
    return this.searchLayoutStore$!.paginator.finalPage;
  }
  getActualPage():number{
    return this.pageLayoutStore$!;
  }
  next(){
    if(this.getFinalPage()>this.getActualPage()){
      this.searchLayout.dispatch(savepagelayout({page:this.getActualPage()+1}))
    }
  }
  after(){
    if(this.initialPage>1){
      this.initialPage=this.initialPage-1;
      this.searchLayout.dispatch(savepagelayout({page:this.initialPage}))
    }
  }
}
