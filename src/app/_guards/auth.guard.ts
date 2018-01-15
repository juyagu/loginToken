import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('currentUser')){
            return true;
        }

        this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
    }
}