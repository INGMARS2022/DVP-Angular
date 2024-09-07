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
  
  constructor(private process: ProcessService) { }

  ngOnInit(): void {
    this.getDefaulters();
    this.getLayout();
    this.getPagos();
  }
  getDefaulters(){
    this.process.getProcess("DEFAULTER").subscribe({
      next: res=>{
        this.defaulter=res;
        console.log(res);
      },
    })
  }
  getLayout(){
    this.process.getProcess("LAYOUT").subscribe({
      next: res=>{
        this.layout=res;
        console.log(res);
      },
    })
  }
  getPagos(){
    this.process.getProcess("PAY").subscribe({
      next: res=>{
        this.pagos=res;
        console.log(res);
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
