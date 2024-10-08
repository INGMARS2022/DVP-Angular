import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationPay, searchPayStore } from 'src/app/interface/interface';
import { initialpagepay } from 'src/app/redux/pay/pagepay.actions';
import { initialsearchpay, savesearchpay } from 'src/app/redux/pay/searchpay.actions';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { XlsService } from 'src/app/services/xls/xls.service';

@Component({
  selector: 'app-searchpay',
  templateUrl: './searchpay.component.html',
  styleUrls: ['./searchpay.component.css']
})
export class SearchpayComponent implements OnInit {

  pagePay$:Observable<number>;
  pagePayStore$?: number;
  searchPay$:Observable<searchPayStore>;
  searchPayStore$?: searchPayStore;
  form:FormGroup= this.fb.group({
    client:   ['',[]],
    billing:  ['',[]],
    service:  ['',[]],
  })
  constructor(
    private fb:FormBuilder,
    private reportsService:ReportsService,
    private xlsService:XlsService,
    private pagePay:Store<{pagepay:number}>,
    private searchPay:Store<{searchpay:searchPayStore}>,
    private loading:LoadingService,
  ) { 
    this.pagePay$ = pagePay.select('pagepay');
    this.searchPay$ = searchPay.select('searchpay');
  }

  ngOnInit(): void {
    this.searchPay$.subscribe({
      next: res=>{
        this.searchPayStore$ = res;
      }
    });
    this.pagePay$.subscribe({
      next: res=>{
        this.pagePayStore$ = res;
        this.searchPage();
      }
    });
  }
  getPage():number{
    return this.pagePayStore$!;
  }
  searchPage(){
    this.search();
  }
  searchBtn(){
    //this.setInitPageStore();
    this.newSearch();
  }
  search(){
    this.loading.showLoading('Buscando',true);
    this.reportsService.pay(
      this.getPage()-1,
      this.searchPayStore$!.client!,
      this.searchPayStore$!.billing!,
      this.searchPayStore$!.service!,
    ).subscribe({
      next: res=>{
          this.setSearchStore(res);
          this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }
  newSearch(){
    this.loading.showLoading('Buscando',true);
    this.reportsService.pay(
      //this.getPage()-1,
      0,
      this.getFormData("client"),
      this.getFormData("billing"),
      this.getFormData("service"),
    ).subscribe({
      next: res=>{
          this.setSearchStore(res);
          this.setSearchPage();
          this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })

  }
  getFormData(name:string):string{
    if(this.form.get(name)!.value == ""){return "null";}
    else{ return this.form.get(name)!.value}
  }
  setSearchStore(res:PaginationPay){
    let obj:searchPayStore= {
      client: this.getFormData("client"),
      billing: this.getFormData("billing"),
      service: this.getFormData("service"),
      paginator:{
        totalResults:res.totalElements,
        initialPage:1,
        actualPage: 1,
        //actualPage:this.getPage(),
        finalPage:this.getCalcPage(res.totalElements)
      },
      results: res.content
    };
    this.searchPay.dispatch(savesearchpay({obj:obj}));
  }
  setSearchPage(){
    this.pagePay.dispatch(initialpagepay());
  }
  setInitSearchStore(){
    this.searchPay.dispatch(initialsearchpay());
  }
  setInitPageStore(){
    this.pagePay.dispatch(initialpagepay());
  }
  getCalcPage(total:number):number{
    if(total<10)return 1;
    if(total %10 == 0) return total/10;
    return Math.trunc(total/10) + 1;
  }
  clear(){
    this.form.get("client")!.setValue("");
    this.form.get("billing")!.setValue("");
    this.form.get("service")!.setValue("");
    this.setInitPageStore();
    this.newSearch();
  }
  down(){
    this.loading.showLoading('Generando reporte',true);
    this.reportsService.payAll().subscribe({
      next: res=>{
        this.xlsService.generatePayXLS(res);
        this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }

}
