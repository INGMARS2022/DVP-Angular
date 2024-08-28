import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationDefaulters, searchDefaultersStore } from 'src/app/interface/interface';
import { initialpagedefaulters } from 'src/app/redux/defaulters/pagedefaulters.actions';
import { initialsearchdefaulters, savesearchdefaulters } from 'src/app/redux/defaulters/searchdefaulters.actions';
import { ReportsService } from 'src/app/services/reports/reports.service';

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
  })
  constructor(
    private fb:FormBuilder,
    private reportsService:ReportsService,
    private pageDefaulters:Store<{pagedefaulters:number}>,
    private searchDefaulters:Store<{searchdefaulters:searchDefaultersStore}>,
  ) { 
    this.pageDefaulters$ = pageDefaulters.select('pagedefaulters');
    this.searchDefaulters$ = searchDefaulters.select('searchdefaulters');
  }

  ngOnInit(): void {
    this.searchDefaulters$.subscribe({
      next: res=>{
        console.log(res);
        this.searchDefaultersStore$ = res;
      }
    });
    this.pageDefaulters$.subscribe({
      next: res=>{
        console.log(res);
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
    this.setInitPageStore();
    this.search();
  }
  search(){
    this.reportsService.defaulters(
      this.getPage()-1,
      this.searchDefaultersStore$!.client!,
      this.searchDefaultersStore$!.billing!,
      this.searchDefaultersStore$!.service!,
    ).subscribe({
      next: res=>{
        console.log(res.content);
          this.setSearchStore(res);
      },
      error: err=>{
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
      paginator:{
        totalResults:res.totalElements,
        initialPage:1,
        actualPage:this.getPage(),
        finalPage:this.getCalcPage(res.totalElements)
      },
    };
    this.searchDefaulters.dispatch(savesearchdefaulters({obj:obj}));
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
    this.setInitPageStore();
  }
}
