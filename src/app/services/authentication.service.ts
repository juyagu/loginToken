import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers,RequestOptions,URLSearchParams } from '@angular/http';
import '../rxjs-operator';


@Injectable()
export class AuthenticationService {
  private headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  private options = new RequestOptions({ headers: this.headers });
  private data = new URLSearchParams();
  private user:any;
  
  constructor( private http: Http ) { }

  getToken(username: string, password : string): Promise<any>{
    this.data.append('user',username);
    this.data.append('pass',password);
    return this.http.post('http://javascript/getToken.php',this.data,this.options)
      .toPromise()
      .then(this.setUser)
      .catch(function(error){
        console.log(error);
      });
  }

  setUser(response : Response){
    let user = response.json();
    if(user && user.token){
      localStorage.setItem('currentUser',JSON.stringify(user));
    }
    return user;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
