import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Headers,RequestOptions,URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '../rxjs-operator';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {

  private user:any;
  
  constructor( private http: HttpClient ) { }

  getToken(username: string, password : string): Observable<any>{
    let json = JSON.stringify({username : username,pass : password});
    let params = "params="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post('http://javascript/UsuarioController/login',params,{headers : headers});
  }

  setUser(user : any){
    if(user.response && user.response.token){
      localStorage.setItem('currentUser',JSON.stringify(user.response));
    }
    return user;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
