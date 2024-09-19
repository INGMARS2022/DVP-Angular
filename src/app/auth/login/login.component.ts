import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, LoginResponse } from 'src/app/interface/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err:string='';
  loginForm:FormGroup= this.fb.group({
    usr:   ['',[Validators.required]],
    psw:   ['',[Validators.required,Validators.minLength(3)]],
  })
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private loading:LoadingService,
    private route:Router,
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('dataDVP');
  }

  // login
  login(){
    this.loading.showLoading('Iniciando sesión',true);
    const obj:Login = {
      user:this.loginForm.get('usr')?.value,
      password:this.loginForm.get('psw')?.value
    }
    this.authService.login(obj)
    .subscribe({
      next: res=>{
        if(res.jwt){
          this.saveToken(res);
          this.route.navigateByUrl('reports/defaulters');
          this.loading.showLoading('',false);
        }    
      },
      error: err=>{
        this.err=err.error.mensaje;
        this.loading.showLoading('',false);
        //this.flash.showMessage(err.error.mensaje,'danger');
      }
    })
  }
  saveToken(obj:LoginResponse){
    localStorage.setItem('dataDVP',JSON.stringify(obj));
  }
}
