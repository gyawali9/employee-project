import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['password']
    })
  }

  // login method define
  logIn(){
    this._http.get<any>("http://localhost:8000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      })
      if(user){
        alert('Login Successfull!');
        this.loginForm.reset();
        this.router.navigate(['employeedash'])
      }else{
        alert('User Not Found!')
      }
    },err=>{
      alert("Something is wrong, Server Side!")
    }
    )
  }

}
