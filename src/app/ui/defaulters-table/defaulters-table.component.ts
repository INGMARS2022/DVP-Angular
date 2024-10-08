import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchDefaultersStore, viewDefaultersStore } from 'src/app/interface/interface';

@Component({
  selector: 'app-defaulters-table',
  templateUrl: './defaulters-table.component.html',
  styleUrls: ['./defaulters-table.component.css']
})
export class DefaultersTableComponent implements OnInit {
  searchDefaulters$:Observable<searchDefaultersStore>;
  searchDefaultersStore$?: searchDefaultersStore;
  constructor(
    private searchDefaulters:Store<{searchdefaulters:searchDefaultersStore}>,
  ) { 
    this.searchDefaulters$ = searchDefaulters.select('searchdefaulters');
  }

  ngOnInit(): void {
    this.searchDefaulters$.subscribe({
      next: res=>{
        this.searchDefaultersStore$=res;
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
