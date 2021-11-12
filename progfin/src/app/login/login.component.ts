import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutGuardService } from '../service/rout-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;
  routeGuardService: any;

    userLogin: any = {
    username : "",
    password : ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(){
    if(this.userLogin.username == 'admin' && this.userLogin.password == 'admin') {
      console.log('login ok');
      //this.routeGuardService.setLogin();
      this.router.navigate(['/clienti/list']);
    } else {
      console.log('email/password errate!!!');
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }
}