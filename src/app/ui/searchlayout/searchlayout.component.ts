import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationLayout, searchLayoutStore } from 'src/app/interface/interface';
import { initialpagelayout } from 'src/app/redux/layout/pagelayout.actions';
import { initialsearchlayout, savesearchlayout } from 'src/app/redux/layout/searchlayout.actions';
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
  ) { 
    this.pageLayout$ = pageLayout.select('pagelayout');
    this.searchLayout$ = searchLayout.select('searchlayout');
  }

  ngOnInit(): void {
    this.searchLayout$.subscribe({
      next: res=>{
        //console.log(res);
        this.searchLayoutStore$ = res;
      }
    });
    this.pageLayout$.subscribe({
      next: res=>{
        console.log(res);
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
    this.reportsService.layout(
      this.getPage()-1,
      this.searchLayoutStore$!.client!,
      this.searchLayoutStore$!.billing!,
      this.searchLayoutStore$!.service!,
    ).subscribe({
      next: res=>{
        //console.log(res.content);
          this.setSearchStore(res);
      },
      error: err=>{
      }
    })
  }
  newSearch(){
    this.reportsService.layout(
      //this.getPage()-1,
      0,
      this.getFormData("client"),
      this.getFormData("billing"),
      this.getFormData("service"),
    ).subscribe({
      next: res=>{
        //console.log(res.content);
          this.setSearchStore(res);
          this.setSearchPage();
      },
      error: err=>{
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
    this.reportsService.layoutAll().subscribe({
      next: res=>{
        //console.log(res.content);
        this.xlsService.generateLayoutXLS(res);
      },
      error: err=>{
      }
    })
  }

}
