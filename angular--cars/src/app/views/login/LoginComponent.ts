import { RequestLogin } from "src/app/resources/models/RequestLogin";
import { Component } from '@angular/core';
import { LoginService } from "src/app/resources/services/login.service";
import { AlertService } from "src/app/resources/services/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public requestLogin: RequestLogin;
  
  constructor(private loginService: LoginService, private alertService: AlertService, private router: Router) {
    this.requestLogin = new RequestLogin();
  
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(response => {
     this.alertService.success('Login successful','Welcome');
     this.router.navigate(['dashboard']); 
  }, (error) => {
    this.alertService.error('Login failed','try again');
    console.log(error);
  });
  }
}

