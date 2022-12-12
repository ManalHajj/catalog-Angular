import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserFormGroup!:UntypedFormGroup;
  errorMessage : any;
  constructor(private fb:UntypedFormBuilder,
              private authService:AuthenticationService,
              private router :Router ) { }

  ngOnInit(): void {
    this.UserFormGroup=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
      }

    );
  }

  handleLogin() {
     let username=this.UserFormGroup.value.username;
     let password=this.UserFormGroup.value.password;
     this.authService.login(username,password).subscribe({
       next : (appUser )=>{
         this.authService.authenticateUser(appUser).subscribe({
           next:(data )=>{
              this.router.navigateByUrl("/admin");
           }
         });
       },
       error : (err)=>{
            this.errorMessage=err;
       }

     })
  }
}
