import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/interface';
import { FlashService } from 'src/app/services/flash/flash.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private userService:UsersService,
    private loading:LoadingService,
    private flash:FlashService,
  ) { }
  form:FormGroup= this.fb.group({
    user:   ['',[Validators.email]],
    name:   ['',[Validators.required]],
  });
  users:Array<User>=[];

  ngOnInit(): void {
    this.getAll();
  }
  searchBtn(){
    if(this.form.get('user')?.value!='' && this.form.get('name')?.value!=''){
      this.loading.showLoading('Registrando',true);
      const obj:User = {
        email:this.form.get('user')?.value,
        name:this.form.get('name')?.value
      }
      this.userService.save(obj).subscribe({
        next: res=>{
          this.getAll();
          this.loading.showLoading('',false);
          this.flash.showMessage('Usuario registrado correctamente','success');
        },
        error: err=>{
          this.flash.showMessage(err.error.error,'danger');
          this.loading.showLoading('',false);
        }
      });
    }else{
      this.flash.showMessage('Completa el formulario','warning');
    }
  }
  getAll(){
    this.loading.showLoading('Buscando usuarios',true);
    this.userService.getAll().subscribe({
      next: res=>{
        this.users=res;
        this.loading.showLoading('',false);
      },error: err=>{
        this.loading.showLoading('',false);
      }
    });
  }
  delete(id:String){
    this.loading.showLoading('Eliminando',true);
    this.userService.delete(id).subscribe({
      next: res=>{
        this.loading.showLoading('',false);
        this.getAll();
      },error: err=>{
        this.loading.showLoading('',false);
      }
    })
  }
}
