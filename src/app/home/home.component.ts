import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private jwtHelper : JwtHelper) { 
    let token = JSON.parse(localStorage.getItem('currentUser'));
    let decoded = this.jwtHelper.decodeToken(token.token);
    console.log(decoded);
  }

  ngOnInit() {
  }

}
