import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationDefaulters, searchDefaultersStore } from 'src/app/interface/interface';
import { initialpagedefaulters } from 'src/app/redux/defaulters/pagedefaulters.actions';
import { initialsearchdefaulters, savesearchdefaulters } from 'src/app/redux/defaulters/searchdefaulters.actions';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { XlsService } from 'src/app/services/xls/xls.service';

@Component({
  selector: 'app-searchdefaulters',
  templateUrl: './searchdefaulters.component.html',
  styleUrls: ['./searchdefaulters.component.css']
})
export class SearchdefaultersComponent implements OnInit {
  pageDefaulters$:Observable<number>;
  pageDefaultersStore$?: number;
  searchDefaulters$:Observable<searchDefaultersStore>;
  searchDefaultersStore$?: searchDefaultersStore;
  form:FormGroup= this.fb.group({
    client:   ['',[]],
    billing:  ['',[]],
    service:  ['',[]],
    origin:  ['',[]],
  })
  constructor(
    private fb:FormBuilder,
    private reportsService:ReportsService,
    private xlsService:XlsService,
    private pageDefaulters:Store<{pagedefaulters:number}>,
    private searchDefaulters:Store<{searchdefaulters:searchDefaultersStore}>,
    private loading:LoadingService,
  ) { 
    this.pageDefaulters$ = pageDefaulters.select('pagedefaulters');
    this.searchDefaulters$ = searchDefaulters.select('searchdefaulters');
  }

  ngOnInit(): void {
    this.searchDefaulters$.subscribe({
      next: res=>{
        this.searchDefaultersStore$ = res;
      }
    });
    this.pageDefaulters$.subscribe({
      next: res=>{
        this.pageDefaultersStore$ = res;
        this.searchPage();
      }
    });
  }
  getPage():number{
    return this.pageDefaultersStore$!;
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
    this.reportsService.defaulters(
      this.getPage()-1,
      this.searchDefaultersStore$!.client!,
      this.searchDefaultersStore$!.billing!,
      this.searchDefaultersStore$!.service!,
      this.searchDefaultersStore$!.origin!,
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
    this.reportsService.defaulters(
      //this.getPage()-1,
      0,
      this.getFormData("client"),
      this.getFormData("billing"),
      this.getFormData("service"),
      this.getFormData("origin"),
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
  setSearchStore(res:PaginationDefaulters){
    let obj:searchDefaultersStore= {
      client: this.getFormData("client"),
      billing: this.getFormData("billing"),
      service: this.getFormData("service"),
      origin: this.getFormData("origin"),
      paginator:{
        totalResults:res.totalElements,
        initialPage:1,
        actualPage: 1,
        //actualPage:this.getPage(),
        finalPage:this.getCalcPage(res.totalElements)
      },
      results: res.content
    };
    this.searchDefaulters.dispatch(savesearchdefaulters({obj:obj}));
  }
  setSearchPage(){
    this.pageDefaulters.dispatch(initialpagedefaulters());
  }
  setInitSearchStore(){
    this.searchDefaulters.dispatch(initialsearchdefaulters());
  }
  setInitPageStore(){
    this.pageDefaulters.dispatch(initialpagedefaulters());
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
    this.form.get("origin")!.setValue("");
    this.setInitPageStore();
    this.newSearch();
  }
  down(){
    this.loading.showLoading('Generando reporte',true);
    this.reportsService.defaultersAll().subscribe({
      next: res=>{
        this.xlsService.generateXLS(res);
        this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }
}
