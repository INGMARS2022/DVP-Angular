import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { viewDefaultersStore } from 'src/app/interface/interface';

@Component({
  selector: 'app-defaulters-table',
  templateUrl: './defaulters-table.component.html',
  styleUrls: ['./defaulters-table.component.css']
})
export class DefaultersTableComponent implements OnInit {
  viewDefaulters$:Observable<viewDefaultersStore>;
  viewDefaultersStore$?: viewDefaultersStore;
  constructor(
    private storeDefaulters:Store<{viewdefaulters:viewDefaultersStore}>,
  ) { 
    this.viewDefaulters$=storeDefaulters.select('viewdefaulters');
  }

  ngOnInit(): void {
    this.viewDefaulters$.subscribe({
      next: res=>{
        //console.log(res);
        this.viewDefaultersStore$=res;
      }
    });
    /*this.search$.subscribe({
      next: res=>{if(res.btn==true && res.screen=='tech')this.deleteT();}
    });
    this.getZone();*/
  }

}
