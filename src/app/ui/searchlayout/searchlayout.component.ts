import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationLayout, searchLayoutStore } from 'src/app/interface/interface';
import { initialpagelayout } from 'src/app/redux/layout/pagelayout.actions';
import { initialsearchlayout, savesearchlayout } from 'src/app/redux/layout/searchlayout.actions';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { XlsService } from 'src/app/services/xls/xls.service';

@Component({
  selector: 'app-searchlayout',
  templateUrl: './searchlayout.component.html',
  styleUrls: ['./searchlayout.component.css']
})
export class SearchlayoutComponent implements OnInit {
  pageLayout$:Observable<number>;
  pageLayoutStore$?: number;
  searchLayout$:Observable<searchLayoutStore>;
  searchLayoutStore$?: searchLayoutStore;
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
    private pageLayout:Store<{pagelayout:number}>,
    private searchLayout:Store<{searchlayout:searchLayoutStore}>,
    private loading:LoadingService,
  ) { 
    this.pageLayout$ = pageLayout.select('pagelayout');
    this.searchLayout$ = searchLayout.select('searchlayout');
  }

  ngOnInit(): void {
    this.searchLayout$.subscribe({
      next: res=>{
        this.searchLayoutStore$ = res;
      }
    });
    this.pageLayout$.subscribe({
      next: res=>{
        this.pageLayoutStore$ = res;
        this.searchPage();
      }
    });
  }
  getPage():number{
    return this.pageLayoutStore$!;
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
    this.reportsService.layout(
      this.getPage()-1,
      this.searchLayoutStore$!.client!,
      this.searchLayoutStore$!.billing!,
      this.searchLayoutStore$!.service!,
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
    this.reportsService.layout(
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
  setSearchStore(res:PaginationLayout){
    let obj:searchLayoutStore= {
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
    this.searchLayout.dispatch(savesearchlayout({obj:obj}));
  }
  setSearchPage(){
    this.pageLayout.dispatch(initialpagelayout());
  }
  setInitSearchStore(){
    this.searchLayout.dispatch(initialsearchlayout());
  }
  setInitPageStore(){
    this.pageLayout.dispatch(initialpagelayout());
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
    this.reportsService.layoutAll().subscribe({
      next: res=>{
        this.xlsService.generateLayoutXLS(res);
        this.loading.showLoading('',false);
      },
      error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }

}
