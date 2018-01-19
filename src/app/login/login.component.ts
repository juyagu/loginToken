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
  mensaje:string = "";
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
    this.authenticationService.getToken(this.model.username,this.model.password).subscribe(
      response => {
        if(typeof response.response.length !== 'undefined'){
          this.loading = false;
          this.mensaje = "El usuario o la contraseña ingresado no es correcto";
        }
        this.authenticationService.setUser(response);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        this.mensaje = "Hubo un error, por favor intente mas tarde";
        console.log("Código: " + error.status);
        console.log("Error: " + error.error.error);
      }
    );
  }
}
