import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  show:boolean=false;
  text:string='';
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe (
      (res: any) => {
        if(res.show==true){
          this.text = res.message;
          this.show = true;
        }
        else{
          this.text = '';
          this.show = false;
        }
      }
    )
  }

}
