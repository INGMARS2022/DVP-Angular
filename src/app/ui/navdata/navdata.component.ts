import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/interface/interface';

@Component({
  selector: 'app-navdata',
  templateUrl: './navdata.component.html',
  styleUrls: ['./navdata.component.css']
})
export class NavdataComponent implements OnInit {
  dataUser!:LoginResponse;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.setDataUser();
  }
  setDataUser(){
    let ctl = localStorage.getItem('dataDVP')|| '';
    if(ctl!=''){
      this.dataUser= JSON.parse(ctl)
    }
  }
  logout(){
    localStorage.removeItem('dataDVP');
    this.route.navigateByUrl('auth'); 
  }
}
