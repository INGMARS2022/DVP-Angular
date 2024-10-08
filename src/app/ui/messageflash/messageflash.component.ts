import { Component, OnInit } from '@angular/core';
import { FlashService } from 'src/app/services/flash/flash.service';

@Component({
  selector: 'app-messageflash',
  templateUrl: './messageflash.component.html',
  styleUrls: ['./messageflash.component.css']
})
export class MessageflashComponent implements OnInit {

  showMessage:boolean=false;
  textMessage:string='';
  type:string='';

  constructor(private flashService: FlashService) { }

  ngOnInit(): void {
    this.flashService.flash$.subscribe (
      (res: any) => {
        this.textMessage = res.message;
        this.showMessage = true;
        this.type=res.type;
        setTimeout(() => {
          this.showMessage = false;
        }, res.time)
      }
    )
  }

}
