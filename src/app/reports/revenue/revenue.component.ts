import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  pageV!: number;
  constructor() { }

  ngOnInit(): void {
  }
  
  page(page: number) {
    //console.log(page);
    this.pageV = page;
  }

}
