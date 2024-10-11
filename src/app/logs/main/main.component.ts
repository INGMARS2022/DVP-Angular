import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/interface/interface';
import { ProcessService } from 'src/app/services/process/process.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  defaulter : Array<Process> = [];
  layout : Array<Process> = [];
  pagos : Array<Process> = [];
  revenue: Array<Process>=[];
  cron : Array<Process>=[];
  
  constructor(private process: ProcessService) { }

  ngOnInit(): void {
    this.getDefaulters();
    this.getLayout();
    this.getPagos();
    this.getRevenue();
    this.getCron();
  }
  getDefaulters(){
    this.process.getProcess("DEFAULTER").subscribe({
      next: res=>{
        this.defaulter=res;
      },
    })
  }
  getLayout(){
    this.process.getProcess("LAYOUT").subscribe({
      next: res=>{
        this.layout=res;
      },
    })
  }
  getPagos(){
    this.process.getProcess("PAY").subscribe({
      next: res=>{
        this.pagos=res;
      },
    })
  }
  getRevenue(){
    this.process.getProcess("REVENUE").subscribe({
      next: res=>{
        this.revenue=res;
      },
    })
  }
  getCron(){
    this.process.getProcess("CRON").subscribe({
      next: res=>{
        this.cron=res;
      },
    })
  }
  addActiveClass(item:Process){
    let s = item.startP;
    let e = item.endP;
    let err = item.status;
    if((s!=null && e!=null) && err!="ERROR" ){
      return true;}return false;
  }
  addProgressClass(item:Process){
    let s = item.startP;
    let e = item.endP;
    if(s!=null && e==null ){
      return true;}return false;
  }
  addErrorClass(item:Process){
    let e = item.status;
    if(e=="ERROR" ){
      return true;}return false;
  }

}
