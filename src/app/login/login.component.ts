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
  noExiste:boolean = false;
  loading = false;
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
    this.loading = true;
    this.authenticationService.getToken(this.model.username,this.model.password)
      .then(response => {
        if(typeof response.response.length !== 'undefined'){
          this.loading = false;
          this.noExiste = true;
        }
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      });
  }
}
