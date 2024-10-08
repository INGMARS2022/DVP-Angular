import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchLayoutStore } from 'src/app/interface/interface';

@Component({
  selector: 'app-layout-table',
  templateUrl: './layout-table.component.html',
  styleUrls: ['./layout-table.component.css']
})
export class LayoutTableComponent implements OnInit {

  searchLayout$:Observable<searchLayoutStore>;
  searchLayoutStore$?: searchLayoutStore;
  constructor(
    private searchLayout:Store<{searchlayout:searchLayoutStore}>,
  ) { 
    this.searchLayout$ = searchLayout.select('searchlayout');
  }

  ngOnInit(): void {
    this.searchLayout$.subscribe({
      next: res=>{
        this.searchLayoutStore$=res;
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
