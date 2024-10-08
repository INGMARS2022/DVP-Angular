import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaulters',
  templateUrl: './defaulters.component.html',
  styleUrls: ['./defaulters.component.css']
})
export class DefaultersComponent implements OnInit {
  pageV!:number;
  constructor() { }

  ngOnInit(): void {
  }
  page(page:number){
    this.pageV=page;
  }

}
