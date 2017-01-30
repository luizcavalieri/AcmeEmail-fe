/**
 * Created by LuizCavalieri on 30/01/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private jwtHelper: JwtHelper) {
    }

    canActivate() {

        let token: string = localStorage.getItem(JWT_TOKEN_NAME);

        // If found check if it has expired
        if (token && !this.jwtHelper.isTokenExpired(token))
        {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
