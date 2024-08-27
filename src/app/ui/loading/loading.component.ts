import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  show:boolean=false;
  text:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
