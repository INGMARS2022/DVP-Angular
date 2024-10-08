import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchPayStore } from 'src/app/interface/interface';
import { savepagepay } from 'src/app/redux/pay/pagepay.actions';

@Component({
  selector: 'app-paginatorpay',
  templateUrl: './paginatorpay.component.html',
  styleUrls: ['./paginatorpay.component.css']
})
export class PaginatorpayComponent implements OnInit {

  pagePay$:Observable<number>;
  pagePayStore$?: number;
  searchPay$:Observable<searchPayStore>;
  searchPayStore$?: searchPayStore;
  actualPage=1;
  initialPage=1;
  finalPage=1;
  totalResults=1;
  constructor(
    private searchPay:Store<{searchpay:searchPayStore}>,
    private pagePay:Store<{pagepay:number}>,
  ) {
    this.pagePay$ = pagePay.select('pagepay');
    this.searchPay$ = searchPay.select('searchpay');
   }

  ngOnInit(): void {
    this.searchPay$.subscribe({
      next: res=>{
        this.searchPayStore$=res;
      }
    });
    this.pagePay$.subscribe({
      next: res=>{
        this.pagePayStore$=res;
        this.initialPage=res;
      }
    });
  }
  getFinalPage():number{
    return this.searchPayStore$!.paginator.finalPage;
  }
  getActualPage():number{
    return this.pagePayStore$!;
  }
  next(){
    if(this.getFinalPage()>this.getActualPage()){
      this.searchPay.dispatch(savepagepay({page:this.getActualPage()+1}))
    }
  }
  after(){
    if(this.initialPage>1){
      this.initialPage=this.initialPage-1;
      this.searchPay.dispatch(savepagepay({page:this.initialPage}))
    }
  }

}
