import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchPayStore } from 'src/app/interface/interface';

@Component({
  selector: 'app-pay-table',
  templateUrl: './pay-table.component.html',
  styleUrls: ['./pay-table.component.css']
})
export class PayTableComponent implements OnInit {

  searchPay$:Observable<searchPayStore>;
  searchPayStore$?: searchPayStore;
  constructor(
    private searchPay:Store<{searchpay:searchPayStore}>,
  ) { 
    this.searchPay$ = searchPay.select('searchpay');
  }

  ngOnInit(): void {
    this.searchPay$.subscribe({
      next: res=>{
        //console.log(res);
        this.searchPayStore$=res;
      }
    });
    /*this.search$.subscribe({
      next: res=>{if(res.btn==true && res.screen=='tech')this.deleteT();}
    });
    this.getZone();*/
  }
  detail(id:number){

  }

}
