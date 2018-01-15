import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl : string;
  constructor(
    private authenticationService : AuthenticationService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.authenticationService.getToken(this.model.username,this.model.password)
      .then(response => {
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
