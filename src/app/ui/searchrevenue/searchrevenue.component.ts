import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationRevenue, searchRevenueStore } from 'src/app/interface/interface';
import { initialpagerevenue } from 'src/app/redux/revenue/pagerevenue.actions';
import { initialsearchrevenue, savesearchrevenue } from 'src/app/redux/revenue/searchrevenue.actions';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { XlsService } from 'src/app/services/xls/xls.service';

@Component({
  selector: 'app-searchrevenue',
  templateUrl: './searchrevenue.component.html',
  styleUrls: ['./searchrevenue.component.css']
})
export class SearchrevenueComponent implements OnInit {

  pageRevenue$:Observable<number>;
  pageRevenueStore$?: number;
  searchRevenue$:Observable<searchRevenueStore>;
  searchRevenueStore$?: searchRevenueStore;
  form:FormGroup= this.fb.group({
    client:   ['',[]],
    billing:  ['',[]],
    service:  ['',[]],
  })
  constructor(
    private fb:FormBuilder,
    private reportsService:ReportsService,
    private xlsService:XlsService,
    private pageRevenue:Store<{pagerevenue:number}>,
    private searchRevenue:Store<{searchrevenue:searchRevenueStore}>,
    private loading:LoadingService,
  ) { 
    this.pageRevenue$ = pageRevenue.select('pagerevenue');
    this.searchRevenue$ = searchRevenue.select('searchrevenue');
  }

  ngOnInit(): void {
    this.searchRevenue$.subscribe({
      next: res=>{
        this.searchRevenueStore$ = res;
      }
    });
    this.pageRevenue$.subscribe({
      next: res=>{
        this.pageRevenueStore$ = res;
        this.searchPage();
      }
    });
  }
  getPage():number{
    return this.pageRevenueStore$!;
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
    this.reportsService.revenue(
      this.getPage()-1,
      this.searchRevenueStore$!.client!,
      this.searchRevenueStore$!.billing!,
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
    this.reportsService.revenue(
      //this.getPage()-1,
      0,
      this.getFormData("client"),
      this.getFormData("billing"),
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
  setSearchStore(res:PaginationRevenue){
    let obj:searchRevenueStore= {
      client: this.getFormData("client"),
      billing: this.getFormData("billing"),
      paginator:{
        totalResults:res.totalElements,
        initialPage:1,
        actualPage: 1,
        //actualPage:this.getPage(),
        finalPage:this.getCalcPage(res.totalElements)
      },
      results: res.content
    };
    this.searchRevenue.dispatch(savesearchrevenue({obj:obj}));
  }
  setSearchPage(){
    this.pageRevenue.dispatch(initialpagerevenue());
  }
  setInitSearchStore(){
    this.searchRevenue.dispatch(initialsearchrevenue());
  }
  setInitPageStore(){
    this.pageRevenue.dispatch(initialpagerevenue());
  }
  getCalcPage(total:number):number{
    if(total<10)return 1;
    if(total %10 == 0) return total/10;
    return Math.trunc(total/10) + 1;
  }
  clear(){
    this.form.get("client")!.setValue("");
    this.form.get("billing")!.setValue("");
    this.setInitPageStore();
    this.newSearch();
  }
  down(){
    this.loading.showLoading('Generando reporte',true);
    this.reportsService.revenueAll().subscribe({
      next: res=>{
        this.xlsService.generateRevenueXLS(res);
        this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }

}
